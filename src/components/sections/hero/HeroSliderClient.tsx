"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(
  () => import("./heroSlider"),
  {
    ssr: false,
  }
);

export default function HeroSliderClient() {
  return <HeroSlider />;
}
