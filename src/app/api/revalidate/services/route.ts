import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("SERVICES", {});

  return NextResponse.json({
    success: true,
    message: "SERVICES cache revalidated",
  });
}
