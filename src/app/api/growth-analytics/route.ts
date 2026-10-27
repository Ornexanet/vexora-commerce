
import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";
import {
  growthSessionCookie,
  verifyGrowthSession,
} from "@/lib/growth-auth";

const redis = Redis.fromEnv();

type Variant = "A" | "B";

type AnalyticsEvent = {
  event?: string;
  data?: {
    experiment?: string;
    variant?: Variant;
  };
  sessionId?: string;
  timestamp?: string;
};

export async function GET() {
  try {
    // 1. Authentication
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

    // 2. Load events from Upstash
    const rawEvents = await redis.lrange(
      "growth:v2:events",
      0,
      -1
    );

    const events: AnalyticsEvent[] = rawEvents.map((item) =>
      typeof item === "string"
        ? JSON.parse(item)
        : item
    );

    // 3. Count events
    const count = (eventName: string) =>
      events.filter(
        (item) => item?.event === eventName
      ).length;

    // 4. Generic A/B experiment calculator
    const getExperimentStats = (
      experimentId: string,
      conversionEvent: string,
      variant: Variant
    ) => {
      const exposedSessions = new Set<string>();
      const convertedSessions = new Set<string>();

      for (const item of events) {
        if (
          item?.event === "experiment_exposure" &&
          item?.data?.experiment === experimentId &&
          item?.data?.variant === variant &&
          typeof item?.sessionId === "string"
        ) {
          exposedSessions.add(item.sessionId);
        }
      }

      for (const item of events) {
        if (
          item?.event === conversionEvent &&
          item?.data?.experiment === experimentId &&
          item?.data?.variant === variant &&
          typeof item?.sessionId === "string" &&
          exposedSessions.has(item.sessionId)
        ) {
          convertedSessions.add(item.sessionId);
        }
      }

      return {
        exposures: exposedSessions.size,
        convertedSessions: convertedSessions.size,
        conversionRate:
          exposedSessions.size > 0
            ? (convertedSessions.size /
                exposedSessions.size) *
              100
            : 0,
      };
    };

    // 5. Sony Landing Page A/B Experiment
    const sonyA = getExperimentStats(
      "sony_landing_cta_v1",
      "landing_cta_clicked",
      "A"
    );

    const sonyB = getExperimentStats(
      "sony_landing_cta_v1",
      "landing_cta_clicked",
      "B"
    );

    // 6. Add to Cart Color A/B Experiment
    const cartA = getExperimentStats(
      "add_to_cart_color_v1",
      "add_to_cart",
      "A"
    );

    const cartB = getExperimentStats(
      "add_to_cart_color_v1",
      "add_to_cart",
      "B"
    );

    // 7. Preserve Sony dashboard response format
    const sonyAbTest = {
      A: {
        exposures: sonyA.exposures,
        clickSessions: sonyA.convertedSessions,
        conversionRate: sonyA.conversionRate,
      },
      B: {
        exposures: sonyB.exposures,
        clickSessions: sonyB.convertedSessions,
        conversionRate: sonyB.conversionRate,
      },
    };

    // 8. Add to Cart experiment response
    const cartAbTest = {
      A: {
        exposures: cartA.exposures,
        cartSessions: cartA.convertedSessions,
        conversionRate: cartA.conversionRate,
      },
      B: {
        exposures: cartB.exposures,
        cartSessions: cartB.convertedSessions,
        conversionRate: cartB.conversionRate,
      },
    };

    // 9. Return analytics data
    return NextResponse.json({
      success: true,

      sonyAbTest,
      cartAbTest,

      totalEvents: events.length,
      productViews: count("product_viewed"),
      addToCarts: count("add_to_cart"),
      addToWishlists: count("add_to_wishlist"),
      checkoutsStarted: count("checkout_started"),
      heroPaginationClicks: count(
        "hero_pagination_clicked"
      ),
      landingCtaClicks: count(
        "landing_cta_clicked"
      ),
      landingPageViews: count(
        "landing_page_viewed"
      ),
    });
  } catch (error) {
    console.error(
      "Growth Analytics V2 Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load analytics",
      },
      { status: 500 }
    );
  }
}

