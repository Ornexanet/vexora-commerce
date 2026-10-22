import Title from "@/components/ui/title";
import { BatteryPlus, ChargingSing, ClockPlus } from "@/lib/icons";
import React from "react";

const batteryFeatures = [
  {
    id: 1,
    title: "24 timmar med skärmen alltid på.",
    description:
      "Ha skärmen på hela dagen utan att oroa dig för batteritiden.",
    icon: <BatteryPlus />,
  },
  {
    id: 2,
    title: "Upp till 36 timmar med batterisparläge.",
    description:
      "Förläng batteritiden utan att kompromissa med funktionerna för hälsa, träning och säkerhet.",
    icon: <ClockPlus />,
  },
  {
    id: 3,
    title: "35 % större batteri.",
    description:
      "Pixel Watch 3 på 45mm har ett större batteri som räcker hela dagen och lite till.",
    icon: <ChargingSing />,
  },
];
const BatteryInfo = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <Title className="text-center">Batteritid som imponerar.</Title>
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
