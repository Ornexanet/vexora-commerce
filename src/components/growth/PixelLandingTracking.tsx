
"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/growthTracker";

export default function PixelLandingTracking() {
  useEffect(() => {
    trackEvent("landing_page_viewed", 24);
  }, []);

  return null;
}

