
import jwt, { JwtPayload } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from "./lib/auth-utils";
import { getNewAccessToken } from './lib/getNewAccessToken';

export async function proxy(request: NextRequest) {
    const cookieStore = await cookies();
    const pathname = request.nextUrl.pathname;
    const hasTokenRefreshedParam = request.nextUrl.searchParams.has('tokenRefreshed');

    if (hasTokenRefreshedParam) {
        const url = request.nextUrl.clone();
        url.searchParams.delete('tokenRefreshed');
        return NextResponse.redirect(url);
    }

    const currentAccessToken = request.cookies.get("accessToken")?.value;
    let tokenRefreshResult = null;
    if (currentAccessToken) {
        tokenRefreshResult = await getNewAccessToken();

        if (tokenRefreshResult?.forceLogout) {
            const loginUrl = new URL("/login", request.url);
            return NextResponse.redirect(loginUrl);
        }

        if (tokenRefreshResult?.tokenRefreshed) {
            const newAccessToken = tokenRefreshResult.accessToken;
            if (newAccessToken && newAccessToken !== currentAccessToken) {
                const url = request.nextUrl.clone();
                url.searchParams.set('tokenRefreshed', 'true');
                return NextResponse.redirect(url);
            }
        }
    }

    const accessToken = currentAccessToken || null;
    let userRole: UserRole | null = null;

    if (accessToken) {
        try {
            const verifiedToken: JwtPayload | string = jwt.verify(
                accessToken,
                process.env.JWT_ACCESS_SECRET as string
            );

            if (typeof verifiedToken === "string") {
                cookieStore.delete("accessToken");
                cookieStore.delete("refreshToken");
                return NextResponse.redirect(new URL('/login', request.url));
            }

            userRole = verifiedToken.role;
        } catch {
            cookieStore.delete("accessToken");
            cookieStore.delete("refreshToken");
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    const routerOwner = getRouteOwner(pathname);
    const isAuth = isAuthRoute(pathname);

    if (accessToken && isAuth) {
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }

    // Public route
    if (routerOwner === null) {
        return NextResponse.next();
    }

    // Protected route but not logged in
    if (!accessToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Admin route access check
    if (routerOwner === "ADMIN" && userRole !== "ADMIN") {
        return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }

    // Common protected route
    if (routerOwner === "COMMON") {
        return NextResponse.next();
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
};
