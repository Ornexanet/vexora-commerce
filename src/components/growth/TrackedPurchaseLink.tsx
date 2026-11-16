"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/growthTracker";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link>;

export default function TrackedPurchaseLink({
  onClick,
  ...props
}: Props) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent("landing_cta_clicked", 24);
        onClick?.(event);
      }}
    />
  );
}
