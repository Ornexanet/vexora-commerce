"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Rating from "@/components/ui/rating";
import Title from "@/components/ui/title";
import { useCart } from "@/contextApi/cartContext";
import { Minus, Plus, ShopingBag } from "@/lib/icons";
import { ProductType } from "@/mockData/products";

import CompatibleAccessories from "./compatibleAccessories";

type ProductOverviewProps = {
  product: ProductType;
};

const categoryNames: Record<string, string> = {
  mobiler: "Mobiler",
  headphones: "Hörlurar",
  smartWatch: "Smarta klockor",
  accessories: "Tillbehör",
  cameras: "Kameror",
};

const ProductOverview = ({ product }: ProductOverviewProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((previousQuantity) =>
      previousQuantity > 1 ? previousQuantity - 1 : 1
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const categoryKey = product.categories?.[0];

  const categoryName = categoryKey
    ? categoryNames[categoryKey] || categoryKey
    : "Produkter";

  /*
   * The new product system uses product.specifications.
   * The fallback below keeps older products working until
   * all products have been migrated.
   */
  const legacySpecifications = [
    {
      label: "Varumärke",
      value: product.brand,
    },
    {
      label: "Modell",
      value: product.model,
    },
    {
      label: "Lagring",
      value: product.storage,
    },
    {
      label: "Färg",
      value: product.color,
    },
    {
      label: "Skärm",
      value: product.display,
    },
    {
      label: "Processor",
      value: product.processor,
    },
    {
      label: "Kamera",
      value: product.camera,
    },
    {
      label: "Batteri",
      value: product.battery,
    },
    {
      label: "Operativsystem",
      value: product.os,
    },
    {
      label: "Garanti",
      value: product.warranty,
    },
    {
      label: "Lagerstatus",
      value: product.availability,
    },
  ].filter(
    (
      specification
    ): specification is {
      label: string;
      value: string;
    } => Boolean(specification.value)
  );

  const technicalSpecifications =
    product.specifications && product.specifications.length > 0
      ? product.specifications
      : legacySpecifications;

  return (
    <div className="overflow-hidden">
      <strong className="text-lg text-light-dark">{categoryName}</strong>

      <div className="mb-10 mt-2">
        <div className="flex items-end justify-between gap-5">
          <Title size="52">{product.title}</Title>

          <p className="shrink-0 text-[28px] font-medium text-foreground">
            {product.price.toLocaleString("sv-SE")} kr
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2.5">
          <div className="flex items-center">
            <Rating
              star={5}
              iconSize="text-[#FFBE0C] fill-[#FFBE0C]"
              className="mr-1 gap-1"
            />

            <span className="text-lg text-light-dark">5.0</span>
          </div>

          <span className="h-[21px] w-px bg-[#B0B5BB]" />

          <span className="text-lg text-light-dark">250 recensioner</span>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-light-dark">
        {product.description}
      </p>

      {technicalSpecifications.length > 0 && (
        <section className="mt-7">
          <Title asChild size="28" className="mb-5 font-extrabold">
            <h2>Tekniska specifikationer</h2>
          </Title>

          <dl className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {technicalSpecifications.map((specification) => (
              <div
                key={`${specification.label}-${specification.value}`}
                className="border-b border-light-gray pb-3"
              >
                <dt className="font-bold text-foreground">
                  {specification.label}
                </dt>

                <dd className="mt-1 text-light-dark">
                  {specification.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <hr className="my-10 border-light-gray" />

      <div className="rounded-2xl bg-[#F4F6F8] px-4 py-5 lg:px-6 lg:py-7.5">
        <div className="mb-5 flex items-center gap-4 lg:mb-8.5 lg:gap-6">
          <div className="flex h-13.5 min-w-[140px] shrink-0 items-center justify-between rounded-xl border-2 border-[#B0B5BB] px-5">
            <button
              type="button"
              onClick={handleDecrement}
              aria-label="Minska antal"
              className="text-light-dark transition hover:text-foreground"
            >
              <Minus />
            </button>

            <output
              aria-live="polite"
              className="text-lg font-bold text-foreground"
            >
              {quantity < 10 ? `0${quantity}` : quantity}
            </output>

            <button
              type="button"
              onClick={handleIncrement}
              aria-label="Öka antal"
              className="text-light-dark transition hover:text-foreground"
            >
              <Plus />
            </button>
          </div>

          <Button
            type="button"
            className="w-full max-w-[435px] flex-1 max-sm:px-4"
            onClick={handleAddToCart}
          >
            <ShopingBag />
            Lägg i varukorgen
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          className="w-full border-light-dark text-light-dark"
          onClick={handleAddToCart}
        >
          Köp nu
        </Button>

        <div className="mt-8.5 flex items-center gap-3.5">
          <Image
            width={56}
            height={56}
            src="/images/product-details/pickup-icon.png"
            alt="Leveransikon"
          />

          <p className="max-w-[327px] font-medium text-light-dark">
            Ange ditt postnummer{" "}
            <Link href="#" className="text-blue underline">
              här
            </Link>{" "}
            för att se när produkten kan levereras.
          </p>
        </div>
      </div>

      <CompatibleAccessories product={product} />
    </div>
  );
};

export default ProductOverview;
