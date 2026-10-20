
"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductType } from "@/mockData/products";
import { useCart } from "@/contextApi/cartContext";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShopingBag } from "@/lib/icons";
import Title from "@/components/ui/title";
import Rating from "@/components/ui/rating";

interface Props {
  product: ProductType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuickViewProduct = ({
  product,
  open,
  onOpenChange,
}: Props) => {
  const productImage = [
    { src: product.thumbnail },
    ...(product.gallery ?? [])
      .filter((src) => src !== product.thumbnail)
      .map((src) => ({ src })),
  ];

  const [currentImage, setCurrentImage] = useState(
    product.thumbnail
  );

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (open) {
      setCurrentImage(product.thumbnail);
      setQuantity(1);
    }
  }, [product.id, product.thumbnail, open]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onOpenChange(false);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[calc(100vh-2rem)]">
        <div className="grid lg:grid-cols-2 items-start gap-7.5">
          <div className="space-y-7.5">
            <div className="bg-[#FFF9F5] aspect-[592/544] lg:max-w-[592px] rounded-[15px] flex items-center justify-center">
              <Image
                width={400}
                height={500}
                sizes="(max-width: 1024px) 100vw, 400px"
                src={currentImage}
                alt={product.title}
                className="rounded-[15px] bg-[#FFF9F5] object-contain"
              />
            </div>

            {productImage.length > 1 && (
              <div className="flex gap-5 overflow-x-auto">
                {productImage.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    onClick={() => setCurrentImage(image.src)}
                    className={cn(
                      "bg-[#FFF9F5] aspect-[150/160] max-h-[160px] rounded-[15px] flex items-center justify-center cursor-pointer min-w-fit",
                      currentImage === image.src
                        ? "opacity-100"
                        : "opacity-40"
                    )}
                  >
                    <Image
                      width={150}
                      height={160}
                      src={image.src}
                      alt={`${product.title} - image ${index + 1}`}
                      className="rounded-[15px] bg-[#FFF9F5] max-h-[160px] object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <DialogHeader className="hidden">
              <DialogTitle>{product.title}</DialogTitle>
            </DialogHeader>

            <div className="overflow-hidden">
              <strong className="text-lg text-light-dark">
                {product.categories?.[0] ?? "Produkt"}
              </strong>

              <div>
                <div className="mb-10">
                  <div className="flex items-end justify-between flex-wrap gap-x-5 gap-y-2">
                    <Title size="42" className="font-bold">
                      {product.title}
                    </Title>

                    <Title
                      size="28"
                      asChild
                      className="font-medium"
                    >
                      <p>
                        {product.discount ? (
                          <span className="flex gap-[14px]">
                            <span className="text-blue">
                              {product.price - product.discount} kr
                            </span>
                            <del>{product.price} kr</del>
                          </span>
                        ) : (
                          <span>{product.price} kr</span>
                        )}
                      </p>
                    </Title>
                  </div>

                  <div className="mt-2 flex items-center gap-2.5">
                    <div className="flex">
                      <Rating
                        star={5}
                        iconSize="text-[#FFBE0C] fill-[#FFBE0C]"
                        className="gap-1 mr-1"
                      />
                      <span className="text-lg text-light-dark">
                        5.0
                      </span>
                    </div>

                    <span className="bg-[#B0B5BB] w-px h-[21px]" />

                    <span className="text-lg text-light-dark">
                      250 Reviews
                    </span>
                  </div>
                </div>

                <p className="text-lg text-light-dark">
                  {product.description}
                </p>
              </div>

              <hr className="my-10 border-light-gray" />

              <div className="bg-[#F4F6F8] rounded-2xl lg:py-7.5 lg:px-6 px-3 py-3">
                <div className="flex items-center sm:gap-6 gap-3 lg:mb-8.5 mb-5">
                  <div className="border-2 border-[#B0B5BB] rounded-xl h-13.5 flex items-center justify-between sm:px-5 px-3 min-w-[140px] shrink-0">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="text-light-dark hover:text-foreground transition"
                      aria-label="Minska antal"
                    >
                      <Minus />
                    </button>

                    <output className="font-bold text-lg">
                      {quantity < 10
                        ? `0${quantity}`
                        : quantity}
                    </output>

                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="text-light-dark hover:text-foreground transition"
                      aria-label="Öka antal"
                    >
                      <Plus />
                    </button>
                  </div>

                  <Button
                    className="w-full flex-1 max-sm:px-4"
                    onClick={handleAddToCart}
                  >
                    <ShopingBag className="sm:block hidden" />
                    Lägg i varukorgen
                  </Button>
                </div>

                <Button
                  variant="outline"
                  className="border-light-dark text-light-dark w-full"
                >
                  Köp nu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewProduct;

