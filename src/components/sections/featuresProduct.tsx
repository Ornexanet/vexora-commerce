"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Title from "../ui/title";
import { useCart } from "@/contextApi/cartContext";
import { ProductType } from "@/mockData/products";

const FeaturesProduct = () => {
  const { addToCart } = useCart();

  // Sample speaker product
  const speakerProduct: ProductType = {
    id: 102,
    title: "True Wireless Stereo Speaker",
    thumbnail: "/images/features/product.png",
    description:
      "The latest Bluetooth 5.0 technology provides more stability and better range so you can enjoy your favourite beats even at a distance.",
    price: 199.99,
    tag: "Featured",
    discount: null,
    categories: ["speakers"],
  };

  const handleShopSpeakers = () => {
    addToCart(speakerProduct);
  };

  return (
    <section className="container lg:mt-37.5 md:mt-25 mt-20">
      <div className="rounded-[20px]  bg-[#eef4ff] flex md:flex-row flex-col-reverse gap-x-10 lg:pt-32 md:pt-12 pt-5 xl:px-[136px] lg:px-10 px-5">
        <div className="max-w-[749px] md:mt-14 mt-10 md:pb-12 pb-5">
          <Title>{speakerProduct.title}</Title>
          <p className="mt-8 text-light-dark font-medium lg:leading-[35.2px] lg:text-[22px] sm:text-lg text-base leading-normal max-w-[611px]">
            {speakerProduct.description}
          </p>
          <div className="mt-[47px] flex items-center sm:gap-x-[50px] gap-x-5 gap-y-4 flex-wrap">
            <Button
              onClick={handleShopSpeakers}
              variant={"outline"}
              className="border-blue text-blue hover:text-black hover:border-black"
            >
              Shop Speakers
            </Button>
            <Link
              href={"/product-details"}
              className="font-bold text-lg leading-[28.8px] flex items-center gap-2.5 hover:text-blue hover:[&_svg]:translate-x-1 transition-all duration-300"
            >
              Learn More{" "}
              <ChevronRight
                size={16}
                className="mt-1 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="ms:self-end self-center">
          <Image
            width={446}
            height={300}
            sizes="100vw"
            src={speakerProduct.thumbnail}
            alt="img"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesProduct;
