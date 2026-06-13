"use client";

import Card from "@/components/ui/card";
import CardHorizontal from "@/components/ui/cardHorizontal";
import { useShopGridView } from "@/contextApi/shopGridViewProvider";
import { cn } from "@/lib/utils";
import { products } from "@/mockData/products";
import { Fragment, useEffect, useState } from "react";

const ProductsContainer = () => {
  const { shopView, setShopView } = useShopGridView();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setShopView("list");
    setIsInitialized(true);
  }, [setShopView]);

  function getGridStyle(value: string) {
    if (value === "default") {
      return "xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2";
    } else if (value === "six") {
      return "grid-cols-4";
    } else if (value === "list") {
      return "grid-cols-1";
    } else {
      return "grid-cols-3";
    }
  }
  if (!isInitialized) {
    return null;
  }
  return (
    <div className={cn("grid gap-[30px] mt-[30px]", getGridStyle(shopView))}>
      {products.bestProductsData.map((product) => (
        <Fragment key={product.id}>
          {shopView === "list" ? (
            <CardHorizontal product={product} />
          ) : (
            <Card product={product} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default ProductsContainer;
