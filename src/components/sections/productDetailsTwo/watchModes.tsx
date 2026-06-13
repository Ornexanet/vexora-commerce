import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

const WatchModes = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-center gap-y-7 gap-x-31">
          <Title>
            160+ sports <br /> modes
          </Title>
          <p className="text-lg tracking-[2%] lg:max-w-[512px]">
            Supports more than 160 sports modes with an optimized professional
            algorithm model that provides you with more accurate workout data,
            so your workouts can be more scientific and productive.
          </p>
        </div>
      </div>
      <div className=" mt-15">
        <Image
          width={1900}
          height={485}
          sizes="100vw"
          src="/images/product-details-two/modes-bg-img.png"
          alt="product-modes"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default WatchModes;
