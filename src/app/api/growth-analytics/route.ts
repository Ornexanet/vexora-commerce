import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
    const rawEvents = await redis.lrange(
        "growth:events",
        0,
        -1
    );

    return NextResponse.json({
        success: true,
        totalEvents: rawEvents.length,
        events: rawEvents,
    });
}
