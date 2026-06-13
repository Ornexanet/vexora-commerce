"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

type ProductCardProps = {
  imageSrc: string;
  title: string;
  price: string;
};
const ProductCard = ({ imageSrc, title, price }: ProductCardProps) => {
  return (
    <div className="bg-[rgba(255,255,255,0.70)] backdrop-blur-[12.85px] flex items-center gap-4 rounded-2xl lg:p-[15px] p-2.5 max-w-[480px]">
      <div className="rounded-[10px] bg-background lg:size-30 size-20 flex items-center justify-center">
        <Image
          width={100}
          height={100}
          sizes="100vw"
          src={imageSrc}
          alt="img"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="lg:mb-10 mb-3">
          <p className="lg:text-lg text-base font-bold line-clamp-1 leading-[1.28]">
            {title}
          </p>
          <p className="lg:text-lg text-base font-medium text-blue mt-2.5 leading-[1.28]">
            {price}
          </p>
        </div>
        <Link
          href={"/product-details"}
          className="underline underline-offset-2 text-sm font-medium hover:text-blue transition-all duration-500"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default function SplitProductShowcase() {
  return (
    <div className="container lg:pt-37.5 md:pt-25 pt-20">
      <ReactCompareSlider
        className="rounded-2xl relative"
        itemOne={
          <>
            <ReactCompareSliderImage
              src="/images/home-2/split-products/dark-headphone-bg.jpg"
              alt="Image one"
              className="max-h-[718px] aspect-[1/1]"
            />
            <div className="absolute left-0 bottom-0">
              <ProductCard
                imageSrc="/images/home-2/split-products/dark-headphone.png"
                title="Sonic Pro 800 (Dark Grey)"
                price="$159.90"
              />
            </div>
          </>
        }
        itemTwo={
          <>
            <ReactCompareSliderImage
              src="/images/home-2/split-products/white-headphone-bg.jpg"
              alt="Image two"
              className="max-h-[718px] aspect-[1/1]"
            />
            <div className="absolute right-0 bottom-0">
              <ProductCard
                imageSrc="/images/home-2/split-products/white-headphone.png"
                price="$159.90"
                title="Sonic Pro 800 (White)"
              />
            </div>
          </>
        }
      />
    </div>
  );
}
