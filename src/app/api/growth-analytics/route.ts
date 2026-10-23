import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";
import {
  growthSessionCookie,
  verifyGrowthSession,
} from "@/lib/growth-auth";


const redis = Redis.fromEnv();

export async function GET() {
  try {
    const cookieStore = await cookies();
const session = cookieStore.get(growthSessionCookie)?.value;

if (!verifyGrowthSession(session)) {
  return NextResponse.json(
    {
      success: false,
      message: "Unauthorized",
    },
    { status: 401 }
  );
}

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
    (item) =>
      typeof item === "object" &&
      item !== null &&
      "event" in item &&
      item.event === eventName
  ).length;

const countExposures = (variant: "A" | "B") => {
  const sessions = new Set<string>();

  for (const item of events) {
    if (
      item?.event === "experiment_exposure" &&
      item?.data?.experiment === "ornexa_add_to_cart_v1" &&
      item?.data?.variant === variant &&
      typeof item?.sessionId === "string"
    ) {
      sessions.add(item.sessionId);
    }
  }

  return sessions.size;
};

const countCartSessions = (variant: "A" | "B") => {
  const sessions = new Set<string>();
  const exposedSessions = new Set(
  events
    .filter(
      (item) =>
        item?.event === "experiment_exposure" &&
        item?.data?.experiment === "ornexa_add_to_cart_v1" &&
        item?.data?.variant === variant &&
        typeof item?.sessionId === "string" 

    )
    .map((item) => item.sessionId)
);


  for (const item of events) {
    if (
      item?.event === "add_to_cart" &&
      item?.data?.experiment === "ornexa_add_to_cart_v1" &&
      item?.data?.variant === variant &&
      typeof item?.sessionId === "string" &&
      exposedSessions.has(item.sessionId)

    ) {
      sessions.add(item.sessionId);
    }
  }

  return sessions.size;
};


    return NextResponse.json({
      success: true,
      abTest: {
  A: {
    exposures: countExposures("A"),
    cartSessions: countCartSessions("A"),
    conversionRate: countExposures("A") > 0
  ? (countCartSessions("A") / countExposures("A")) * 100
  : 0,

  },
  B: {
    exposures: countExposures("B"),
    cartSessions: countCartSessions("B"),
    conversionRate: countExposures("B") > 0
  ? (countCartSessions("B") / countExposures("B")) * 100
  : 0,

  },
},

      totalEvents: events.length,
      productViews: count("product_viewed"),
      addToCarts: count("add_to_cart"),
      addToWishlists: count("add_to_wishlist"),
      checkoutsStarted: count("checkout_started"),
      heroPaginationClicks: count("hero_pagination_clicked"),
      landingCtaClicks: count("landing_cta_clicked"),
      landingPageViews: count("landing_page_viewed"),

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
