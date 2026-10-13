import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const rawEvents = await redis.lrange(
      "growth:v2:events",
      0,
      -1
    );

    const events = rawEvents.map((item) =>
      typeof item === "string" ? JSON.parse(item) : item
    );

    const count = (eventName: string) =>
      events.filter(
        (item: any) => item.event === eventName
      ).length;

    return NextResponse.json({
      success: true,
      totalEvents: events.length,
      productViews: count("product_viewed"),
      addToCarts: count("add_to_cart"),
      addToWishlists: count("add_to_wishlist"),
      checkoutsStarted: count("checkout_started"),
    });
  } catch (error) {
    console.error("Growth Analytics V2 Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load analytics",
      },
      { status: 500 }
    );
  }
}
