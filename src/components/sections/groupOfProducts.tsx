"use client";
import * as React from "react";
import { Eye, ShopingCart } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useCart } from "@/contextApi/cartContext";
import { ProductType } from "@/mockData/products";
import QuickViewProduct from "../sections/productDetails/quickViewProduct";
import { useState } from "react";

const Pointer = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ className, ...props }, ref) => {
  return (
    <button
      type="button"
      aria-label="Visa produkt"
      ref={ref}
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px] rounded-full border border-[rgba(255,255,255,0.33)] flex justify-center items-center cursor-pointer after:absolute after:inset-0 after:w-full after:h-full after:border after:border-[rgba(255,255,255,0.33)] after:animate-ping after:rounded-full",
        className,
      )}
      {...props}
    >
      <div className="w-[45px] h-[45px] rounded-full bg-[rgba(255,255,255,0.30)] flex justify-center items-center">
        <div className="w-[25px] h-[25px] rounded-full bg-[rgba(255,255,255,0.70)]"></div>
      </div>
    </button>
  );
});
Pointer.displayName = "Pointer";

const ProductCard = () => {
  const { addToCart } = useCart();
  const [openQuickView, setOpenQuickView] = useState(false);

  const product: ProductType = {
    id: 100,
    title: "Insta360 x4",
    thumbnail: "/images/groupOfProducts/product-single-1.png",
    description: "360-degree action camera",
    price: 159.9,
    tag: null,
    discount: null,
    categories: ["cameras"],
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleQuickView = () => {
    setOpenQuickView(true);
  };

  return (
    <>
      <div className="bg-[rgba(255,255,255,0.70)] backdrop-blur-[12.85px] flex rounded-lg p-[5px] w-[255px]">
        <div>
          <Image
            width={115}
            height={132}
            sizes="100vw"
            src={product.thumbnail}
            alt="img"
          />
        </div>
        <div className="flex flex-col justify-between pt-[19px] pb-[13px]">
          <div>
            <p className="text-sm font-medium line-clamp-1">{product.title}</p>
            <p className="text-sm font-medium text-blue mt-1.5">
              ${product.price}
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleAddToCart}
              className="text-black w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.10)] shadow-[0_12px_25px_0_rgba(47,53,61,0.15)]"
            >
              <ShopingCart className="size-4" />
            </button>
            <button
              onClick={handleQuickView}
              className="text-black w-[35px] h-[35px] rounded-full flex justify-center items-center bg-[rgba(255,255,255,0.10)] shadow-[0_12px_25px_0_rgba(47,53,61,0.15)]"
            >
              <Eye />
            </button>
          </div>
        </div>
      </div>
      <QuickViewProduct
        product={product}
        open={openQuickView}
        onOpenChange={setOpenQuickView}
      />
    </>
  );
};

const GroupOfProducts = () => {
  return (
    <section className="pt-7.5">
      <div className="container">
        <div className="grid lg:grid-cols-2 xl:gap-[30px] gap-5">
          <div className="relative">
            <Image
              width={785}
              height={500}
              sizes="100vw"
              src={"/images/groupOfProducts/product-1.png"}
              alt="img"
              className="rounded-lg w-full h-full"
            />
            <Popover defaultOpen={true}>
              <PopoverTrigger asChild>
                <Pointer />
              </PopoverTrigger>
              <PopoverContent align="end" sideOffset={5} className="p-0">
                <ProductCard />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid sm:grid-cols-2 xl:gap-[30px] gap-5">
            <div>
              <Image
                width={378}
                height={500}
                sizes="100vw"
                src={"/images/groupOfProducts/product-2.png"}
                alt="img"
                className="rounded-lg w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between xl:gap-[30px] gap-5">
              <Image
                width={378}
                height={232}
                sizes="100vw"
                src={"/images/groupOfProducts/product-3.png"}
                alt="img"
                className="rounded-lg w-full h-full"
              />
              <Image
                width={378}
                height={232}
                sizes="100vw"
                src={"/images/groupOfProducts/product-4.png"}
                alt="img"
                className="rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupOfProducts;
