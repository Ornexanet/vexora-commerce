import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const event = await request.json();

  console.log("[Growth API]", event);

  return NextResponse.json({
    success: true,
  });
}
