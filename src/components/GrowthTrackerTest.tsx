"use client";

import { trackEvent } from "@/lib/growthTracker";

export default function GrowthTrackerTest() {
  return (
    <button onClick={() => trackEvent("product_viewed", 2)}>
      Test Growth Event
    </button>
  );
}
