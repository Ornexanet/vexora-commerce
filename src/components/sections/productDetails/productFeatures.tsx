import Title from "@/components/ui/title";
import { CheckCircle2, Headphones } from "lucide-react";
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
                <Image
                  width={351}
                  height={552}
                  src="/images/product-details/feature-product-1.png"
                  alt="Product Feature 1"
                  className="rounded-[15px]"
                />
              </div>
              <div className="bg-white rounded-[15px] flex items-center justify-center">
                <Image
                  width={351}
                  height={552}
                  src="/images/product-details/feature-product-2.png"
                  alt="Product Feature 2"
                  className="rounded-[15px]"
                />
              </div>
            </div>
            <div>
              <Title size="52" asChild className="tracking-[2%]">
                <h2>McLaren inspired</h2>
              </Title>
              <p className="mt-3 text-light-dark leading-[170%]">
                Celebrating a relationship which has been in place since 2015,
                the Px8 McLaren Edition is finished in elegant grey leather with
                Papaya orange details inspired by McLaren’s supercars and
                hypercars.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div>
                  <div>
                    <CheckCircle2 className="text-light-dark inline" />
                    <span className="ml-3 font-medium text-lg">
                      Designed highlights
                    </span>
                  </div>
                  <p className="leading-[170%] mt-4 text-light-dark">
                    Integration of McLaren Automotive cues is subtle but
                    stylish, with a Galvanic grey finish.
                  </p>
                </div>
                <div>
                  <div>
                    <Headphones className=" text-light-dark inline" />
                    <span className="ml-3 font-medium text-lg">
                      Audio partners
                    </span>
                  </div>
                  <p className="leading-[170%] mt-4 text-light-dark">
                    The partnership is built on firm technical foundations,
                    something that has already been recognised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-25">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-[15px] relative overflow-hidden">
            <Image
              width={788}
              height={570}
              src="/images/product-details/feature-product-3.png"
              alt="Product Feature 3"
              className="rounded-[15px] w-full"
            />
            <div className="sm:px-7.5 px-5 py-7 absolute inset-0 flex flex-col justify-end h-full w-full">
              <Title size="52" asChild className="text-white max-w-[625px]">
                <h2>High-resolution sound with advanced DSP</h2>
              </Title>
            </div>
          </div>
          <div className="rounded-[15px] relative overflow-hidden">
            <Image
              width={788}
              height={570}
              src="/images/product-details/feature-product-4.png"
              alt="Product Feature 3"
              className="rounded-[15px] w-full"
            />
            <div className="sm:px-7.5 px-5 py-7 absolute inset-0 flex flex-col justify-end h-full w-full">
              <p className="text-white max-w-[518px] text-xl lg:text-[22px] lg:leading-[140%] font-medium">
                Manufactured under license from McLaren Automotive Limited. The
                McLaren name and logo are registered trademarks of McLaren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
