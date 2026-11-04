
import Link from "next/link";
import type { ReactNode } from "react";

type TrackedCTAProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function TrackedCTA({
  href,
  children,
  className,
}: TrackedCTAProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}