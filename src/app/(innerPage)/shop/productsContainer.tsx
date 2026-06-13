"use client";

import Card from "@/components/ui/card";
import CardHorizontal from "@/components/ui/cardHorizontal";
import { useShopGridView } from "@/contextApi/shopGridViewProvider";
import { cn } from "@/lib/utils";
import { products } from "@/mockData/products";
import { Fragment } from "react";

const ProductsContainer = () => {
  const { shopView } = useShopGridView();

  function getGridStyle(value: string) {
    if (value === "default") {
      return "lg:grid-cols-4 md:grid-cols-3 grid-cols-2";
    } else if (value === "six") {
      return "xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2";
    } else if (value === "list") {
      return "grid-cols-1";
    } else {
      return "grid-cols-4";
    }
  }
  return (
    <div className={cn("grid lg:gap-7.5 gap-5 mt-7.5", getGridStyle(shopView))}>
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
