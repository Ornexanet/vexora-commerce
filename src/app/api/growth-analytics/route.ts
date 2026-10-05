import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
    const rawEvents = await redis.lrange(
        "growth:events",
        0,
        -1
    );
    const events = rawEvents.map((item) => {
    if (typeof item === "string") {
        return JSON.parse(item);
    }

    return item;
});
const productViews = events.filter(
    (event) => event.event === "product_viewed"
).length;

const addToCarts = events.filter(
    (event) => event.event === "add_to_cart"
).length;

const checkoutsStarted = events.filter(
    (event) => event.event === "checkout_started"
).length;
const addToCartRate =
    productViews > 0
        ? Math.round((addToCarts / productViews) * 100)
        : 0;
const checkoutStartRate =
    addToCarts > 0
        ? Math.round((checkoutsStarted / addToCarts) * 100)
        : 0;
const viewToCheckoutRate =
    productViews > 0
        ? Math.round((checkoutsStarted / productViews) * 100)
        : 0;
const now = Date.now();
const last24Hours = now - 24 * 60 * 60 * 1000;

const eventsLast24Hours = events.filter((event) => {
    const eventTime = new Date(event.timestamp).getTime();

    return eventTime >= last24Hours;
});
const productViews24h = eventsLast24Hours.filter(
    (event) => event.event === "product_viewed"
).length;
const addToCarts24h = eventsLast24Hours.filter(
    (event) => event.event === "add_to_cart"
).length;
const checkoutsStarted24h = eventsLast24Hours.filter(
    (event) => event.event === "checkout_started"
).length;
const addToCartRate24h =
    productViews24h > 0
        ? Math.round((addToCarts24h / productViews24h) * 100)
        : 0;
const checkoutStartRate24h =
    addToCarts24h > 0
        ? Math.round((checkoutsStarted24h / addToCarts24h) * 100)
        : 0;
const viewToCheckoutRate24h =
    productViews24h > 0
        ? Math.round((checkoutsStarted24h / productViews24h) * 100)
        : 0;


    return NextResponse.json({
        success: true,
        totalEvents: rawEvents.length,
        productViews,
        addToCarts,
        checkoutsStarted,
        addToCartRate,
        checkoutStartRate,
        viewToCheckoutRate,
        last24Hours: {
    productViews: productViews24h,
    addToCarts: addToCarts24h,
    checkoutsStarted: checkoutsStarted24h,
    addToCartRate: addToCartRate24h,
    checkoutStartRate: checkoutStartRate24h,
    viewToCheckoutRate: viewToCheckoutRate24h,
},

        events: rawEvents,
    });
}
