
"use client";

import { useState, useEffect, type ComponentProps } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/growthTracker";
import { trackExperimentEvent } from "@/lib/experimentTracker";
import {
  type ExperimentVariant,
  getExperimentVariant,
} from "@/lib/pixelExperiment";

type Props = ComponentProps<typeof Link>;

export default function TrackedPurchaseLink({
  onClick,
  ...props
}: Props) {
  const [variant, setVariant] = useState<ExperimentVariant | null>(null);

  useEffect(() => {
    const assignedVariant = getExperimentVariant();

    setVariant(assignedVariant);

    trackExperimentEvent(
      "experiment_exposure",
      assignedVariant
    );
  }, []);

  if (variant === null) return null;

  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent("landing_cta_clicked", 24);

        trackExperimentEvent(
          "experiment_cta_clicked",
          variant
        );

        onClick?.(event);
      }}
    >
      {variant === "B" ? "Se pris & detaljer" : "Köp nu"}
    </Link>
  );
}

