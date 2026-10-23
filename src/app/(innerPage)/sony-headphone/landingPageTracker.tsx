
"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/growth-events";


export default function LandingPageTracker() {
  useEffect(() => {
    trackEvent("landing_page_viewed", {
      productId: 101,
    });
  }, []);

  return null;
}

