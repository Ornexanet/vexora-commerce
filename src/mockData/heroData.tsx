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
    title: "Zypher X1",
    description: "Leading the Way in Aerial Photography and Performance",
    image: "/images/hero/img-1.png",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
      {
        id: 1,
        icon: "VideoRecorder",
        name: "4K UHD Camera",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "Extended Flight Time",
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
    title: "Hushr Pro",
    description: "Engineered for Immersive Sound and Seamless Comfort",
    image: "/images/hero/img-2.png",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
      {
        id: 1,
        icon: "SoundDecibel",
        name: "Noise Cancellation",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "30hrs Playback",
      },
      {
        id: 3,
        icon: "Bluetooth",
        name: "Bluetooth 5.2 with aptX™",
      },
    ],
  },
  {
    id: 3,
    title: "Harmoniq Z",
    description: "Designed for Pure Audio Bliss and All-Day Comfort",
    image: "/images/hero/img-3.png",
    backgroundImage: "/images/hero/bg-1.png",
    features: [
      {
        id: 1,
        icon: "SoundDecibel",
        name: "Noise Cancellation",
      },
      {
        id: 2,
        icon: "BatteryCharging",
        name: "30hrs Playback",
      },
      {
        id: 3,
        icon: "Bluetooth",
        name: "Bluetooth 5.2 with aptX™",
      },
    ],
  },
];
