import Title from "@/components/ui/title";
import { BatteryCharging, Camera, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductFeatures = () => {
  return (
    <div>
      <div className="container">
        <div className="bg-[#F5F5F7] rounded-3xl xl:px-25 sm:px-10 px-5 xl:py-25 sm:py-15 py-10">
          <div className="grid lg:grid-cols-[717fr_638fr] xl:gap-x-15 gap-x-5 gap-y-10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-[15px] flex items-center justify-center">
                <Image width={351} height={552} src="/images/mobiles/iphone-16-plus.webp" alt="iPhone 16 Plus framsida och baksida" className="rounded-[15px]" />
              </div>
              <div className="bg-white rounded-[15px] flex items-center justify-center">
                <Image width={351} height={552} src="/images/mobiles/iphone-16-plus.webp" alt="iPhone 16 Plus Ultramarine" className="rounded-[15px]" />
              </div>
            </div>

            <div>
              <Title size="52" asChild className="tracking-[2%]">
                <h2>Stor skärm. Stark prestanda.</h2>
              </Title>
              <p className="mt-3 text-light-dark leading-[170%]">
                iPhone 16 Plus kombinerar en stor 6,7-tums Super Retina XDR OLED-skärm,
                Apple A18-prestanda och avancerad kamera i en tunn och hållbar design.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div>
                  <Camera className="text-light-dark inline" />
                  <span className="ml-3 font-medium text-lg">Avancerad kamera</span>
                  <p className="leading-[170%] mt-4 text-light-dark">
                    48 MP huvudkamera och 12 MP ultravidvinkel för skarpa bilder och video.
                  </p>
                </div>

                <div>
                  <Cpu className="text-light-dark inline" />
                  <span className="ml-3 font-medium text-lg">Apple A18-chip</span>
                  <p className="leading-[170%] mt-4 text-light-dark">
                    Snabb och effektiv prestanda för appar, spel, foto och vardagsanvändning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-25">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[15px] relative overflow-hidden bg-[#F5F5F7] min-h-[420px] flex items-center justify-center p-10">
            <div>
              <BatteryCharging className="mb-6 text-light-dark" size={42} />
              <Title size="52" asChild>
                <h2>Lång batteritid för hela dagen</h2>
              </Title>
              <p className="mt-4 text-light-dark text-xl leading-[150%]">
                Upp till 27 timmars videouppspelning gör telefonen redo för arbete,
                resor, streaming och vardag.
              </p>
            </div>
          </div>

          <div className="rounded-[15px] relative overflow-hidden bg-[#F5F5F7] min-h-[420px] flex items-center justify-center p-10">
            <div>
              <ShieldCheck className="mb-6 text-light-dark" size={42} />
              <Title size="52" asChild>
                <h2>Byggd för att hålla</h2>
              </Title>
              <p className="mt-4 text-light-dark text-xl leading-[150%]">
                Modern design, stark prestanda och två års garanti gör iPhone 16 Plus
                till ett tryggt premiumval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
