import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

const WatchModes = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <div className="flex lg:flex-row flex-col lg:items-center lg:justify-center gap-y-7 gap-x-31">
          <Title>
            Över 160 <br /> träningsformer
          </Title>
          <p className="text-lg tracking-[2%] lg:max-w-[512px]">
            Stöd för över 160 träningsformer med en optimerad professionell algoritm som ger mer precisa träningsdata, så att dina träningspass kan bli mer vetenskapligt grundade och effektiva.
          </p>
        </div>
      </div>
      <div className=" mt-15">
        <Image
          width={1900}
          height={485}
          sizes="100vw"
          src="/images-optimized/product-details-two/modes-bg-img.webp"
          alt="Träningsformer"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default WatchModes;
