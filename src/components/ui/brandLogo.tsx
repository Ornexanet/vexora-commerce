import Image from "next/image";

export default function BrandLogo({ className = "", theme = "auto", priority = false }: {
  className?: string;
  theme?: "auto" | "light" | "dark";
  priority?: boolean;
}) {
  return <span className={`block ${className}`}>
    {theme !== "dark" && <Image src="/brand/ornexa-light.svg" alt="Ornexa" width={236} height={48} priority={priority} unoptimized className={`h-auto w-full ${theme === "auto" ? "dark:hidden" : ""}`} />}
    {theme !== "light" && <Image src="/brand/ornexa-dark.svg" alt="Ornexa" width={236} height={48} priority={priority} unoptimized className={`h-auto w-full ${theme === "auto" ? "hidden dark:block" : ""}`} />}
  </span>;
}
