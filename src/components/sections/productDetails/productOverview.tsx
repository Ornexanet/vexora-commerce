"use client";
import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import Title from "@/components/ui/title";
import { useCart } from "@/contextApi/cartContext";
import { Minus, Plus, ShopingBag } from "@/lib/icons";
import { ProductType } from "@/mockData/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CompatibleAccessories from "./compatibleAccessories";
import { cn } from "@/lib/utils";

export const colorVariant = [
  {
    name: "Polished Silver Aluminum Case",
    colors: { top: "#B0B5BB", bottom: "#000000" },
  },
  {
    name: "Galvanic Grey & Papaya",
    colors: { top: "#E59F45", bottom: "#50504F" },
  },
  {
    name: "Matte Black Aluminum Case",
    colors: { top: "#2F353D", bottom: "#000000" },
  },
  {
    name: "Matte Black Aluminum Case",
    colors: { top: "#2F353D", bottom: "#000000" },
  },
];

const mockProduct: ProductType = {
  id: 999,
  title: "Sony WH-1000XM6",
  price: 3990,
  description:
    "Sony WH-1000XM6 är trådlösa premiumhörlurar med avancerad brusreducering, klart ljud och bekväm design för arbete, resor och musik.",
  thumbnail: "/images/products/sony-wh-1000xm6-main.webp",
  categories: ["Hörlurar"],
  tag: null,
  discount: null,
};

const ProductOverview = ({ product }: { product: ProductType }) => {

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeColor, setActiveColor] = useState(0);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(mockProduct, quantity);
  };
  return (
    <div className="overflow-hidden">
      <strong className="text-lg text-light-dark">
  {product.categories?.[0] || "Mobiler"}
</strong>
      <div>
        <div className="mb-10">
          <div className="flex items-end justify-between gap-x-5">
            <Title size="52">{product.title}</Title>
            <Title size="28" asChild className="font-medium">
              <p>
                
                <Title size="28" asChild className="font-medium">
  <p>
    <span>{product.price} kr</span>
  </p>
</Title>

              </p>
            </Title>
          </div>
          <div className="mt-1 flex items-center gap-2.5">
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
       <p className="text-lg text-light-dark">
  {product.description}
</p>
  <div>
  <Title asChild size="28" className="mb-5 font-extrabold">
    <p>Tekniska specifikationer</p>
  </Title>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-light-dark">
    <p><strong>Varumärke:</strong> {product.brand}</p>
    <p><strong>Modell:</strong> {product.model}</p>
    <p><strong>Lagring:</strong> {product.storage}</p>
    <p><strong>Färg:</strong> {product.color}</p>
    <p><strong>Skärm:</strong> {product.display}</p>
    <p><strong>Processor:</strong> {product.processor}</p>
    <p><strong>Kamera:</strong> {product.camera}</p>
    <p><strong>Batteri:</strong> {product.battery}</p>
    <p><strong>Operativsystem:</strong> {product.os}</p>
    <p><strong>Garanti:</strong> {product.warranty}</p>
    <p><strong>Lagerstatus:</strong> {product.availability}</p>
  </div>
</div>
      <hr className="my-10 border-light-gray"></hr>
      <div className="bg-[#F4F6F8] rounded-2xl lg:py-7.5 py-5 lg:px-6 px-4">
        <div className="flex items-center lg:gap-6 gap-4 lg:mb-8.5 mb-5">
          <div className="border-2 border-[#B0B5BB] rounded-xl h-13.5 flex items-center justify-between px-5 min-w-[140px] shrink-0">
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
            className="w-full max-w-[435px] flex-1 max-sm:px-4"
            onClick={handleAddToCart}
          >
            <ShopingBag />
            Add to Cart
          </Button>
        </div>
        <Button
          variant={"outline"}
          className="border-light-dark text-light-dark w-full"
        >
          Buy it now
        </Button>
        <div className="flex items-center gap-3.5 mt-8.5">
          <Image
            width={56}
            height={56}
            src={"/images/product-details/pickup-icon.png"}
            alt="img"
          />
          <p className="font-medium text-light-dark max-w-[327px]">
            Enter your zip code{" "}
            <Link href={"#"} className="text-blue underline">
              here
            </Link>{" "}
            to find out when this item arrives
          </p>
        </div>
      </div>
      <CompatibleAccessories />
    </div>
    </div>
  );
};

export default ProductOverview;
