import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  if (!slug) {
    return NextResponse.json(
      { success: false, message: "Slug is required" },
      { status: 400 }
    );
  }


  revalidateTag(`SERVICE_${slug}`, {});
  revalidateTag("SERVICES", {});

  return NextResponse.json({
    success: true,
    message: `Service ${slug} cache revalidated`,
  });
}
