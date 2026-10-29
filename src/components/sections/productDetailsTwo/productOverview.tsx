"use client";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { useCart } from "@/contextApi/cartContext";
import { Minus, Plus, ShopingBag } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ProductType } from "@/mockData/products";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const colorVariant = [
  {
    name: "Boett i polerat silverfärgat aluminium",
    colors: { top: "#B0B5BB", bottom: "#000000" },
  },
  {
    name: "Boett i champagneguldfärgat aluminium",
    colors: { top: "#E59F45", bottom: "#50504F" },
  },
  {
    name: "Boett i mattsvart aluminium",
    colors: { top: "#2F353D", bottom: "#000000" },
  },
];

const sizeVariant = [
  {
    name: "41mm",
    description: "Passar handleder med 130 - 210mm omkrets",
  },
  {
    name: "45mm",
    description: "Passar handleder med 140 - 220mm omkrets",
  },
];

const mockProduct: ProductType = {
  id: 999,
  title: "Px8 McLaren Edition",
  price: 799,
  description:
    "En hyllning till det långvariga, prisbelönta samarbetet mellan Bowers & Wilkins och McLaren Automotive och de superbilar och hyperbilar från McLaren som har utrustats med ljud från Bowers & Wilkins.",
  thumbnail: "/images-optimized/product-details/product-single-1.webp",
  categories: ["Headphones"],
  tag: null,
  discount: null,
};

const ProductOverview = () => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("41mm");
  const [selectedColor, setSelectedColor] = useState(0);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(mockProduct, quantity);
  };
  return (
    <div className="overflow-hidden">
      <strong className="text-lg text-light-dark">Bärbar teknik</strong>
      <div>
        <div className="mb-10">
          <Title size="52">Watch 2 Pro</Title>
          <div className="flex items-center gap-x-7.5 mt-1">
            <Title size="28" asChild className="font-normal">
              <p>$295.00</p>
            </Title>
            <Title size="28" asChild className="font-normal text-[#B0B5BB]">
              <del>$349.00</del>
            </Title>
          </div>
        </div>
        <p className="text-lg text-light-dark mt-10">
          Watch Pro 2 är en mångsidig hälsopartner på språng som du inte visste att du behövde.
        </p>
      </div>
      <hr className="my-10 border-light-gray"></hr>
      <div className="space-y-5">
        <Title asChild size="28" className="font-extrabold">
          <p>Välj storlek</p>
        </Title>
        {sizeVariant.map((value, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(value.name)}
            className={cn(
              "border border-light-gray rounded-xl px-5 py-[15px] block w-full text-start hover:border-blue transition-all",
              selectedSize === value.name && "border-blue",
            )}
          >
            <b className="text-lg block">{value.name}</b>
            <p className="text-lg text-light-dark">{value.description}</p>
          </button>
        ))}
      </div>
      <hr className="my-10 border-light-gray"></hr>
      <div>
        <Title asChild size="28" className="mb-5 font-extrabold">
          <p>Välj färg</p>
        </Title>
        <div className="flex gap-x-7.5 gap-y-5 flex-wrap items-start">
          {colorVariant.map((value, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className="text-center lg:w-[111px] w-20 cursor-pointer group"
            >
              <div
                className={cn(
                  "w-full h-15 lg:h-20 flex items-center justify-center border border-light-gray rounded-2xl group-hover:border-blue transition",
                  selectedColor === index && "border-blue",
                )}
              >
                <div
                  className="size-10 lg:size-12.5 rounded-full"
                  style={{
                    background: `linear-gradient(180deg, ${value.colors.top} 50%, ${value.colors.bottom} 50%)`,
                  }}
                ></div>
              </div>
              <p className="mt-2.5 text-sm text-light-dark group-hover:font-bold transition">
                {value.name}
              </p>
            </button>
          ))}
        </div>
      </div>
      <hr className="my-10 border-light-gray"></hr>
      <div className="bg-[#F4F6F8] rounded-2xl lg:py-7.5 lg:px-6 p-4">
        <div className="flex items-center gap-x-2.5 mt-1">
          <Title size="28" asChild className="font-extrabold">
            <p>$299.99</p>
          </Title>
          <Title size="28" asChild className="font-extrabold text-light-dark">
            <del>$349.00</del>
          </Title>
        </div>
        <div className="flex items-center lg:gap-6 gap-4 mb-8.5 mt-8.5">
          <div className="border-2 border-[#B0B5BB] rounded-xl h-13.5 flex items-center justify-between px-5 min-w-[140px] shrink-0">
            <button
              onClick={handleDecrement}
              className="text-light-dark hover:text-foreground transition"
            >
              <Minus />
            </button>
            <output className="font-bold text-lg">
              {quantity.toString().padStart(2, "0")}
            </output>
            <button
              onClick={handleIncrement}
              className="text-light-dark hover:text-foreground transition"
            >
              <Plus />
            </button>
          </div>
          <Button onClick={handleAddToCart} className="flex-1 max-sm:px-4">
            <ShopingBag />
            Lägg i varukorgen
          </Button>
        </div>
        <div className="flex items-center gap-3.5 mt-8.5">
          <Image
            width={56}
            height={56}
            src={"/images/product-details/pickup-icon.png"}
            alt="Bild"
          />
          <p className="font-medium text-light-dark max-w-[327px]">
            Ange ditt postnummer{" "}
            <Link href={"#"} className="text-blue underline">
              här
            </Link>{" "}
            för att se när varan kan levereras
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
