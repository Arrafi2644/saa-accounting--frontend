import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("TESTIMONIALS", {});

  return NextResponse.json({
    success: true,
    message: "TESTIMONIALS cache revalidated",
  });
}
