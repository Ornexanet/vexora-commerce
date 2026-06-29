export interface heroDataType {
  id: number;
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
    title: "iPhone 17 Pro",
description: "Kraftfull prestanda, avancerad kamera och premiumdesign.",
image: "/images/hero/iphone-17-pro-shop-ornexa-herslider.webp",
videoUrl: "https://youtube.com/embed/vcq5nMeg2SA?autoplay=1",

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
    title: "Galaxy Ultra S26",
    description: "Upplev kraftfullt ljud med aktiv brusreducering, bekväm passform och upp till 40 timmars batteritid – perfekta för både arbete och fritid.",
    image: "/images/hero/galagxy-ultras26-shop-ornexa-heroslider.webp",
    videoUrl: "https://youtube.com/embed/2gYqEi8-am4?autoplay=1",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
  {
    id: 1,
    icon: "SoundDecibel",
    name: "Aktiv brusreducering",
  },
  {
    id: 2,
    icon: "BatteryCharging",
    name: "Upp till 40 timmars batteritid",
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
    title: "Xiaomi 17T Pro",
    description: "Flaggskeppsprestanda med blixtsnabb laddning, avancerad AI-kamera och en imponerande AMOLED-skärm för en förstklassig mobilupplevelse.",
    image: "/images/hero/xiaomi17t-pro-shop-ornexa-heroslider.webp",
    videoUrl: "",
    backgroundImage: "/images/hero/bg-1.png",
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
