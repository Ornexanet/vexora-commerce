import Title from "@/components/ui/title";
import { BatteryPlus, ChargingSing, ClockPlus } from "@/lib/icons";
import React from "react";

const batteryFeatures = [
  {
    id: 1,
    title: "24 hours with always-on display.",
    description:
      "Keep your screen on all day without worrying about battery life.",
    icon: <BatteryPlus />,
  },
  {
    id: 2,
    title: "Up to 36 hours with Battery Saver.",
    description:
      "Extend your battery without compromising health, fitness, and safety features.",
    icon: <ClockPlus />,
  },
  {
    id: 3,
    title: "35% bigger battery.",
    description:
      "The 45mm Pixel Watch 3 has a larger battery so you can outlast the day.",
    icon: <ChargingSing />,
  },
];
const BatteryInfo = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <Title className="text-center">Big-time battery.</Title>
        <div className="mt-12.5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-7.5 gap-x-17.5">
          {batteryFeatures.map((item) => (
            <div
              key={item.id}
              className="text-center flex flex-col items-center justify-center"
            >
              <span className="text-[#34A853]">{item.icon}</span>
              <Title size="28" asChild className="font-medium mt-7.5">
                <h5>{item.title}</h5>
              </Title>
              <p className="mt-5 text-lg tracking-[2%] text-light-dark leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatteryInfo;
