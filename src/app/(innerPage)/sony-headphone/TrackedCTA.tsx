
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/growth-events";
import { getSonyVariant } from "@/lib/sonyExperiment";

type TrackedCTAProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function TrackedCTA({
  href,
  children,
  className,
}: TrackedCTAProps) {
  const [variant, setVariant] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    const selectedVariant = getSonyVariant();

    setVariant(selectedVariant);

    const exposureKey = "sony_landing_cta_v1_exposed";

    if (
      sessionStorage.getItem(exposureKey) !== selectedVariant
    ) {
      trackEvent("experiment_exposure", {
        productId: 101,
        experiment: "sony_landing_cta_v1",
        variant: selectedVariant,
      });

      sessionStorage.setItem(
        exposureKey,
        selectedVariant
      );
    }
  }, []);

  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent("landing_cta_clicked", {
          productId: 101,
          experiment: "sony_landing_cta_v1",
          variant: variant ?? "A",
        });
      }}
    >
      {variant === "B"
        ? "Köp Sony WH-1000XM6"
        : children}
    </Link>
  );
}

