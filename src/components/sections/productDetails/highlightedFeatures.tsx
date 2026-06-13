import React from "react";

const featuresList = [
  {
    name: "40mm dynamic",
    message: "Carbon Driver",
    icon: "/images/product-details/features-icon-1.png",
  },
  {
    name: "30 hours ",
    message: "Playback",
    icon: "/images/product-details/features-icon-2.png",
  },
  {
    name: "5.2 with aptX™",
    message: "Bluetooth ",
    icon: "/images/product-details/features-icon-3.png",
  },
  {
    name: "4320g",
    message: "Net weight ",
    icon: "/images/product-details/features-icon-4.png",
  },
  {
    name: "Adaptive",
    message: "ANC",
    icon: "/images/product-details/features-icon-5.png",
  },
];

const HighlightedFeatures = () => {
  return (
    <div className="mt-11">
      <div className="border border-[#E0E4E9] rounded-[15px] py-7.5 pl-7.5 pr-2.5 relative">
        <span className="text-lg font-bold text-light-dark px-2 absolute -top-4 bg-background">
          Highlighted Features
        </span>
        <div className="flex gap-3 overflow-x-auto">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl py-[15px] px-3 bg-[#F5F5F7] flex items-center gap-4 min-w-fit"
            >
            {/* eslint-disable-next-line*/}
              <img src={feature.icon} alt="icon" className="max-h-[37px]"/>
              <div className="mt-2.5">
                <p className="font-medium text-sm">{feature.name}</p>
                <p className="text-sm text-light-dark">{feature.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightedFeatures;
