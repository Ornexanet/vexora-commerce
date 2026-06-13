"use client";
import React, { useState } from "react";
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

const productImage = [
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

const QuickViewProduct = ({ product, open, onOpenChange }: Props) => {
  const [currentImage, setCurrentImage] = useState(productImage[0].src);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onOpenChange(false);
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-5xl overflow-y-auto max-h-[calc(100vh-2rem)]">
        <div className="grid lg:grid-cols-2 items-start gap-7.5">
          <div className="space-y-7.5">
            <div className="bg-[#FFF9F5] aspect-[592/544] lg:max-w-[592px] rounded-[15px] flex items-center justify-center">
              <Image
                width={400}
                height={500}
                sizes="100vw"
                src={currentImage}
                alt="product-img"
                className="rounded-[15px] bg-[#FFF9F5] object-cover"
              />
            </div>
            <div className="space-y-7.5 flex gap-5 overflow-x-auto">
              {productImage.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(image.src)}
                  className={cn(
                    "bg-[#FFF9F5] aspect-[150/160] max-h-[160px] rounded-[15px] flex items-center justify-center cursor-pointer min-w-fit",
                    currentImage === image.src ? "opacity-100" : " opacity-40",
                  )}
                >
                  <Image
                    width={150}
                    height={160}
                    src={image.src}
                    alt="img"
                    className="rounded-[15px] bg-[#FFF9F5] max-h-[160px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <DialogHeader className="hidden">
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <div className="overflow-hidden">
              <strong className="text-lg text-light-dark">Headphones</strong>
              <div>
                <div className="mb-10">
                  <div className="flex items-end justify-between flex-wrap gap-x-5 gap-y-2">
                    <Title size="42" className="font-bold">
                      {product.title}
                    </Title>
                    <Title size="28" asChild className="font-medium">
                      <p>
                        {product.discount ? (
                          <span className="flex gap-[14px]">
                            <span className="text-blue">
                              ${product.price - product.discount}
                            </span>
                            <del>${product.price}</del>
                          </span>
                        ) : (
                          <span>${product.price}</span>
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
                      <span className="text-lg text-light-dark">5.0</span>
                    </div>
                    <span className="bg-[#B0B5BB] w-px h-[21px]"></span>
                    <span className="text-lg text-light-dark">250 Reviews</span>
                  </div>
                </div>
                <p className="text-lg text-light-dark">{product.description}</p>
              </div>
              <hr className="my-10 border-light-gray"></hr>
              <div className="bg-[#F4F6F8] rounded-2xl lg:py-7.5 lg:px-6 px-3 py-3">
                <div className="flex items-center sm:gap-6 gap-3 lg:mb-8.5 mb-5">
                  <div className="border-2 border-[#B0B5BB] rounded-xl h-13.5 flex items-center justify-between sm:px-5 px-3 min-w-[140px] shrink-0">
                    <button
                      onClick={handleDecrement}
                      className="text-light-dark hover:text-foreground transition"
                    >
                      <Minus />
                    </button>
                    <output className="font-bold text-lg">
                      {quantity < 10 ? `0${quantity}` : quantity}
                    </output>
                    <button
                      onClick={handleIncrement}
                      className="text-light-dark hover:text-foreground transition"
                    >
                      <Plus />
                    </button>
                  </div>
                  <Button
                    className="w-full flex-1 max-sm:px-4"
                    onClick={handleAddToCart}
                  >
                    <ShopingBag className="sm:block hidden" />
                    Add to Cart
                  </Button>
                </div>
                <Button
                  variant={"outline"}
                  className="border-light-dark text-light-dark w-full"
                >
                  Buy it now
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
