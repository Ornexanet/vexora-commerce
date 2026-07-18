"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type ProductPreviewSingleImageProps = {
  product: {
    title?: string;
    thumbnail: string;
    gallery?: string[];
  };
};

const ProductPreviewSingleImage = ({
  product,
}: ProductPreviewSingleImageProps) => {
  const productImages = useMemo(() => {
    const images =
      product.gallery && product.gallery.length > 0
        ? product.gallery
        : [product.thumbnail];

    return Array.from(
      new Set([product.thumbnail, ...images])
    );
  }, [product.gallery, product.thumbnail]);

  const [currentImage, setCurrentImage] = useState(
    productImages[0]
  );

  useEffect(() => {
    setCurrentImage(productImages[0]);
  }, [productImages]);

  return (
    <div className="grid gap-7.5 xl:grid-cols-[190fr_701fr]">
      <div className="order-2 flex gap-5 overflow-x-auto xl:order-1 xl:block xl:space-y-7.5">
        {productImages.map((image, index) => {
          const isActive = currentImage === image;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setCurrentImage(image)}
              aria-label={`Visa produktbild ${index + 1}`}
              aria-pressed={isActive}
              className={cn(
                "flex h-[216px] min-w-[190px] items-center justify-center rounded-[15px] border bg-[#FFF9F5] transition",
                isActive
                  ? "border-blue opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              )}
            >
              <Image
                width={190}
                height={216}
                src={image}
                alt={`${product.title ?? "Produkt"} – bild ${
                  index + 1
                }`}
                className="max-h-[216px] w-full rounded-[15px] object-contain"
              />
            </button>
          );
        })}
      </div>

      <div className="order-1 flex min-h-[520px] items-center justify-center rounded-[15px] bg-[#FFF9F5] p-6 xl:order-2">
        <Image
          width={701}
          height={701}
          sizes="(max-width: 1280px) 100vw, 701px"
          src={currentImage}
          alt={`${product.title ?? "Produkt"} – vald bild`}
          priority
          className="max-h-[701px] w-full rounded-[15px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductPreviewSingleImage;
