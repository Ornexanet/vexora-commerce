import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST(request: Request) {
  const event = await request.json();
  await redis.lpush(
  "growth:events",
  JSON.stringify(event)
);

  console.log("[Growth API]", event);

  return NextResponse.json({
    success: true,
  });
}
