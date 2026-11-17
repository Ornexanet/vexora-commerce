"use client";
import { useState, useEffect, type ComponentProps } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/growthTracker";
import { ExperimentVariant, getExperimentVariant } from "@/lib/pixelExperiment";
type Props = ComponentProps<typeof Link>;

export default function TrackedPurchaseLink({
  onClick,
  ...props
}: Props) {
  const [variant, setVariant] = useState<ExperimentVariant | null>(null);
  useEffect(() => {
    setVariant(getExperimentVariant());
  }, []);
  if (variant === null) return null;
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent("landing_cta_clicked", 24);
        onClick?.(event);
      }}
      >
      {variant === "B" ? "Se pris & detaljer" : "Köp nu"}
    </Link>
  );
}
