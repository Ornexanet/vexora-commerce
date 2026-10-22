export interface heroDataType {
  id: number;
  productId: number;
  title: string;
  description: string;
  backgroundImage: string;
  image: string;
  videoUrl: string;
  features: {
    id: number;
    icon: string;
    name: string;
  }[];
}

export const heroData: heroDataType[] = [
  {
    id: 1,
    productId: 2,
    title: "iPhone 17 Pro",
description: "Kraftfull prestanda, avancerad kamera och premiumdesign.",
image: "/images/hero/iphone-17-pro-shop-ornexa-herslider.webp",
videoUrl: "https://youtube.com/embed/vcq5nMeg2SA?autoplay=1",

backgroundImage: "/images/hero/bg-1.webp",

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
        name: "Avancerad navigering",
      },
    ],
  },
  {
    id: 2,
    productId: 4,
    title: "Galaxy Ultra S26",
    description: "Kraftfull prestanda, avancerad mobilfotografering och en elegant premiumdesign.",
    image: "/images/hero/galagxy-ultras26-shop-ornexa-heroslider.webp",
    videoUrl: "https://youtube.com/embed/2gYqEi8-am4?autoplay=1",
    backgroundImage: "/images/hero/bg-1.webp",
    
   features: [
  {
    id: 1,
    icon: "VideoRecorder",
    name: "Avancerad kamera",
  },
  {
    id: 2,
    icon: "BatteryCharging",
    name: "Kraftfull prestanda",
  },
  {
    id: 3,
    icon: "Map",
    name: "Premiumdesign",
  },
],



  },
  {
    id: 3,
    productId: 5,
    title: "Xiaomi 17T Pro",
    description: "Flaggskeppsprestanda med blixtsnabb laddning, avancerad AI-kamera och en imponerande AMOLED-skärm för en förstklassig mobilupplevelse.",
    image: "/images/hero/xiaomi17t-pro-shop-ornexa-heroslider.webp",
    videoUrl: "https://youtube.com/embed/tVYv9Yxe2mk?autoplay=1",
    backgroundImage: "/images/hero/bg-1.webp",
    features: [
  {
    id: 1,
    icon: "Cpu",
    name: "Flaggskeppsprestanda",
  },
  {
    id: 2,
    icon: "BatteryCharging",
    name: "120W snabbladdning",
  },
  {
    id: 3,
    icon: "Camera",
    name: "AI-kamera 200 MP",
  },
],

  },
];
