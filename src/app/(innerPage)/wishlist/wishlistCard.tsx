"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductType } from "@/mockData/products";
import { useCart } from "@/contextApi/cartContext";
import { useWishlist } from "@/contextApi/wishlistContext";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

const WishlistCard = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="rounded-lg bg-[#F5F5F7] p-2.5 relative group">
      <button
        onClick={() => removeFromWishlist(product.id)}
        className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background shadow-md flex items-center justify-center text-light-dark hover:text-red-500 hover:bg-red-50 transition-all duration-300"
      >
        <XIcon size={18} />
      </button>
      <div
        className="relative rounded-lg  overflow-hidden"
        style={{ backgroundColor: `${product.backgroundColor || "#f1f1f1"}` }}
      >
        <Link
          href={"#"}
          className="flex items-center justify-center h-auto sm:h-[460px] pl-[26px] pr-[19px] pb-[65px] pt-[62px] hover:scale-105 transition-all duration-500"
        >
          <Image
            width={300}
            height={300}
            sizes="100vw"
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[300px] h-auto object-contain"
          />
        </Link>
      </div>
      <div className="mt-5">
        <Link
          href={"#"}
          className="md:text-xl text-lg md:leading-normal text-light-dark font-bold hover:text-blue transition-all duration-300"
        >
          {product.title}
        </Link>
        <p className="md:text-lg md:leading-normal text-light-dark mt-2">
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
        <Button onClick={handleAddToCart} className="w-full mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default WishlistCard;
