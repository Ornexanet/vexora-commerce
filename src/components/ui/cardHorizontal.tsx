"use client";

import { Bolt, Minus, Plus, ShopingBag } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ProductType } from "@/mockData/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import Rating from "./rating";
import { useCart } from "@/contextApi/cartContext";
import { useState } from "react";

interface PropsType {
  product: ProductType;
  className?: string;
  imgContainer?: string;
  imgWrapper?: string;
  ImgWidth?: number;
  ImgHeight?: number;
}
const CardHorizontal = ({
  product,
  className,
  imgContainer,
  imgWrapper,
  ImgWidth = 333,
  ImgHeight = 333,
}: PropsType) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  return (
    <div
      className={cn(
        "rounded-lg flex sm:flex-row flex-col gap-x-[30px] gap-y-5 group/card",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center sm:max-w-[310px] w-full max-h-[380px] aspect-[310/380] shrink-0 relative rounded-lg overflow-hidden",
          imgContainer,
        )}
        style={{ backgroundColor: `${product.backgroundColor || "#f1f1f1"}` }}
      >
        <Link
          href={"/product-details"}
          className={cn(
            "flex items-center justify-center px-5 hover:scale-105 transition-all duration-500",
            imgWrapper,
          )}
        >
          <Image
            width={ImgWidth}
            height={ImgHeight}
            sizes="100vw"
            src={product.thumbnail}
            alt={product.title}
            className={cn("h-auto object-contain", `max-h-[${ImgHeight}px]`)}
          />
        </Link>
        {product.tag && (
          <div className="absolute top-[14px] right-[15px] rounded-sm py-1.5 pl-2.5 pr-[15px] bg-card max-h-[30px] flex items-center gap-1 shadow-[0_8px_40px_0_rgba(1,22,36,0.08)]">
            <span className="text-blue">
              <Bolt />
            </span>
            <p className="text-sm font-medium"> {product.tag}</p>
          </div>
        )}
        {product.discount && (
          <div className="absolute top-[19px] left-0 rounded-tl-none rounded-bl-none rounded-sm py-1.5 pl-2.5 pr-2.5 bg-blue max-h-[30px] text-white flex items-center gap-1">
            <p className="text-sm"> Save ${product.discount}</p>
          </div>
        )}
      </div>
      <div className="">
        <Link
          href={"/product-details"}
          className="md:text-xl text-lg leading-normal md:leading-normal text-light-dark font-bold hover:text-blue transition-all duration-300"
        >
          {product.title}
        </Link>
        <p className="md:text-xl text-lg leading-normal md:leading-normal font-bold mt-2">
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
        <div className="pb-10 mt-5 flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <Rating
              star={5}
              className="gap-1 [&_svg]:text-[#FFBE0C] [&_svg]:fill-[#FFBE0C]"
            />
            <span className="mdLtext-lg md:leading-normal text-light-dark">
              5.0
            </span>
          </div>
          <span className="h-[21px] w-px bg-[#B0B5BB] block"></span>
          <span className="mdLtext-lg md:leading-normal text-light-dark">
            59 reviews
          </span>
        </div>
        <p className="md:text-lg leading-6 md:leading-7 text-light-dark">
          Celebrating the long-standing, award-winning partnership between
          Bowers & Wilkins and McLaren Automotive and the McLaren supercars and
          hypercars in which Bowers & Wilkins has been integrated.
        </p>
        <div className="mt-10 flex flex-wrap gap-6">
          <div className="rounded-lg border-2 border-[#B0B5BB] px-5 py-2.5 md:h-[54px] h-12 inline-flex items-center gap-[15px] max-w-[139px]">
            <button
              onClick={handleDecrement}
              className="w-6 h-6 flex justify-center items-center text-[#B0B5BB] hover:text-foreground transition-all duration-500"
            >
              <Minus />
            </button>
            <span className="md:text-lg md:leading-normal font-bold">
              {String(quantity).padStart(2, "0")}
            </span>
            <button
              onClick={handleIncrement}
              className="w-6 h-6 flex justify-center items-center text-[#B0B5BB] hover:text-foreground transition-all duration-500"
            >
              <Plus />
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="gap-x-[15px] max-w-[240px]"
          >
            <ShopingBag />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
