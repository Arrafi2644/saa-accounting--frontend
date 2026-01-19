import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("SEOS", {});

  return NextResponse.json({
    success: true,
    message: "SEOS cache revalidated",
  });
}
