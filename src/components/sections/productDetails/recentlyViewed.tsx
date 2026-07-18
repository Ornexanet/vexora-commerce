"use client";

import { useEffect, useMemo, useState } from "react";

import Card from "@/components/ui/card";
import Title from "@/components/ui/title";
import { allProducts, ProductType } from "@/mockData/products";

type RecentlyViewedProps = {
  product: ProductType;
};

const STORAGE_KEY = "ornexa-recently-viewed";
const MAX_STORED_PRODUCTS = 8;
const MAX_VISIBLE_PRODUCTS = 4;

const RecentlyViewed = ({ product }: RecentlyViewedProps) => {
  const [recentProductIds, setRecentProductIds] = useState<number[]>([]);

  useEffect(() => {
    try {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      const storedIds: number[] = storedValue
        ? JSON.parse(storedValue)
        : [];

      const validStoredIds = Array.isArray(storedIds)
        ? storedIds.filter((id): id is number => typeof id === "number")
        : [];

      setRecentProductIds(validStoredIds);

      const updatedIds = [
        product.id,
        ...validStoredIds.filter((id) => id !== product.id),
      ].slice(0, MAX_STORED_PRODUCTS);

      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedIds)
      );
    } catch (error) {
      console.error("Could not update recently viewed products:", error);
    }
  }, [product.id]);

  const recentlyViewedProducts = useMemo(() => {
    return recentProductIds
      .filter((id) => id !== product.id)
      .map((id) => allProducts.find((item) => item.id === id))
      .filter((item): item is ProductType => Boolean(item))
      .slice(0, MAX_VISIBLE_PRODUCTS);
  }, [product.id, recentProductIds]);

  if (recentlyViewedProducts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-light-gray py-16 md:py-20">
      <div className="container">
        <div className="mb-10">
          <Title size="52" className="font-extrabold">
            Senast visade produkter
          </Title>

          <p className="mt-3 max-w-2xl text-lg text-light-dark">
            Fortsätt där du slutade och jämför produkter du nyligen har tittat på.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-7.5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recentlyViewedProducts.map((recentProduct) => (
            <Card
              key={recentProduct.id}
              product={recentProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
