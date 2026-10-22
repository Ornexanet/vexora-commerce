
"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/growth-events";

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
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent("landing_cta_clicked", {
          productId: 101,
        });
      }}
    >
      {children}
    </Link>
  );
}

