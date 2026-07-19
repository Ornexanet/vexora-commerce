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
      return "xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2";
    } else if (value === "six") {
      return "grid-cols-4";
    } else if (value === "list") {
      return "grid-cols-1";
    } else {
      return "grid-cols-3";
    }
  }
  return (
    <div className={cn("grid  gap-[30px] mt-[30px]", getGridStyle(shopView))}>
      {products.accessoriesData.map((product) => (
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
