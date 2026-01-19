import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("SITEINFO", {});

  return NextResponse.json({
    success: true,
    message: "SITEINFO cache revalidated",
  });
}
