"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const productImage = [
  {
    src: "/images/product-details/product-single-1.png",
  },
  {
    src: "/images/product-details/product-single-2.png",
  },
  {
    src: "/images/product-details/product-single-3.png",
  },
  {
    src: "/images/product-details/product-single-4.png",
  },
];
const ProductPreviewSingleImage = () => {
  const [currentImage, setCurrentImage] = useState(productImage[0].src);
  return (
    <div className="grid xl:grid-cols-[190fr_701fr] gap-7.5">
      <div className="space-y-7.5 max-xl:flex max-xl:gap-5 overflow-x-auto order-2 xl:order-1">
        {productImage.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(image.src)}
            className={cn(
              "bg-[#FFF9F5] h-[216px] rounded-[15px] flex items-center justify-center cursor-pointer min-w-fit",
              currentImage === image.src ? "opacity-100" : " opacity-40"
            )}
          >
            <Image
              width={190}
              height={216}
              src={image.src}
              alt="img"
              className="rounded-[15px] bg-[#FFF9F5] max-h-[216px] object-cover"
            />
          </div>
        ))}
      </div>
      <div className="bg-[#FFF9F5] rounded-[15px] flex items-center justify-center order-1 xl:order-2">
        <Image
          width={701}
          height={995}
          sizes="100vw"
          src={currentImage}
          alt="product-img"
          className="rounded-[15px] bg-[#FFF9F5]"
        />
      </div>
    </div>
  );
};

export default ProductPreviewSingleImage;
