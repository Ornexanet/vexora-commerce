"use client";
import { Minus, Plus, ShopingBag } from "@/lib/icons";
import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { useCart } from "@/contextApi/cartContext";
import { ProductType } from "@/mockData/products";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FeaturesProductThree = () => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Product data for Buds Pro 2
  const product: ProductType = {
    id: 101,
    title: "Buds Pro 2",
    thumbnail: "/images/features/1000x-serie-shop-ornexa2.webp",
    description:
      "Spatial Audio Effect is based on the Head-Related Transfer Function (HRTF) for spatial sound supported by unlimited Bluetooth devices and audio sources.",
    price: 295.0,
    tag: null,
    discount: 54,
    categories: ["headphones"],
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/checkout");
  };

  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col xl:gap-x-[66px] gap-x-10 gap-y-10">
          <div className="flex sm:flex-row flex-col max-sm:items-center gap-x-[30px] gap-y-5">
            <div>
              <Image
                width={378}
                height={477}
                sizes="100vw"
                src={"/images/features/1000x-serie-shop-ornexa1 .webp"}
                alt="img"
              />
            </div>
            <div>
              <Image
                width={380}
                height={477}
                sizes="100vw"
                src={"/images/features/1000x-serie-shop-ornexa2.webp"}
                alt="img"
              />
            </div>
          </div>
          <div className="lg:w-[46.7%]">
            <strong className="md:text-lg md:leading-normal text-light-dark">
              Headphones
            </strong>
            <Title>Buds Pro 2</Title>
            <div className="flex items-center gap-[30px] mt-2">
              <Title asChild size="28" className="font-normal">
                <p>$295.00</p>
              </Title>
              <Title asChild size="28" className="font-normal">
                <del className="text-[#B0B5BB]">$349.00</del>
              </Title>
            </div>
            <p className="text-light-dark md:leading-7 md:text-lg max-w-[711px] mt-10">
              Spatial Audio Effect is based on the Head-Related Transfer
              Function (HRTF) for spatial sound supported by unlimited Bluetooth
              devices and audio sources. Get fully surrounded by rich,
              cinema-grade sound.
            </p>
            <hr className="mt-10 w-full" />
            <div className="mt-10 flex sm:gap-6 gap-4">
              <div className="rounded-lg border-2 border-[#B0B5BB] px-5 py-2.5 h-[54px] inline-flex items-center gap-[15px] max-w-[139px] w-full">
                <button
                  onClick={handleDecrement}
                  className="w-6 h-6 flex justify-center items-center text-[#B0B5BB] hover:text-foreground transition-all duration-500"
                >
                  <Minus />
                </button>
                <span className="md:text-lg md:leading-normal font-bold">
                  {quantity.toString().padStart(2, "0")}
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
                variant={"outline"}
                className="gap-x-[15px] border-blue text-blue hover:border-black hover:text-foreground max-w-[211px] max-sm:px-4 flex-1"
              >
                <ShopingBag />
                Add to Cart
              </Button>
            </div>
            <div className="mt-[30px] max-w-[377px]">
              <Button onClick={handleBuyNow} className="w-full">
                Buy it Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProductThree;
