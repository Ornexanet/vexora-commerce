export interface heroDataType {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  image: string;
  features: {
    id: number;
    icon: string;
    name: string;
  }[];
}

export const heroData: heroDataType[] = [
  {
    id: 1,
    title: "iPhone 17 Pro",
description: "Kraftfull prestanda, avancerad kamera och premiumdesign.",
image: "/images/hero/iphone-17-pro-shop-ornexa-herslider.webp",
backgroundImage: "/images/hero/bg-1.png",

    features: [
      {
        id: 1,
        icon: "VideoRecorder",
        name: "Aktiv brudreducering",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "40 timmars batteritid",
      },
      {
        id: 3,
        icon: "Map",
        name: "Advanced Navigation",
      },
    ],
  },
  {
    id: 2,
    title: "Ornexa Sound Pro",
    description: "Trådlösa premiumhörlurar med aktiv brusreducering och kristallklart ljud för hela dagen.",
    image: "/images/hero/img-2.png",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
      {
        id: 1,
        icon: "SoundDecibel",
        name: "Aktiv Brusreducering",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "40 timmars batteritid",
      },
      {
        id: 3,
        icon: "Bluetooth",
        name: "Bluetooth 5.3",
      },
    ],
  },
  {
    id: 3,
    title: "Ornexa Audio Max",
    description: "Premiumhörlurar med fylligt ljud, aktiv brusreducering och komfort hela dagen.",
    image: "/images/hero/img-3.png",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
      {
        id: 1,
        icon: "SoundDecibel",
        name: "Aktiv Brusreducering",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "30 timmars batteritid",
      },
      {
        id: 3,
        icon: "Bluetooth",
        name: "Bluetooth 5.™",
      },
    ],
  },
];
