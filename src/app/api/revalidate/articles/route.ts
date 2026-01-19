import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("ARTICLES", {});

  return NextResponse.json({
    success: true,
    message: "ARTICLES cache revalidated",
  });
}
