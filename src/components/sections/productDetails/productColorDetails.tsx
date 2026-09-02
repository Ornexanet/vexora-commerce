"use client";

import { useState } from "react";

import { ProductType } from "@/mockData/products";
import ProductPreviewSingleImage from "./productPreviewSingleImage";
import ProductOverview from "./productOverview";
import HighlightedFeatures from "./highlightedFeatures";


type ProductColorDetailsProps = {
  product: ProductType;
  categoryLink: string;
};

const ProductColorDetails = ({
  product,
  categoryLink,
}: ProductColorDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colorOptions?.[0]?.name ?? ""
  );

  const selectedColorOption =
    product.colorOptions?.find(
      (option) => option.name === selectedColor
    ) ?? product.colorOptions?.[0];

  const displayedProduct: ProductType = selectedColorOption
    ? {
        ...product,
        color: selectedColorOption.name,
        thumbnail: selectedColorOption.thumbnail,
        gallery: selectedColorOption.gallery,
      }
    : product;

  return (
    <>
      
<div className="min-w-0">
  <ProductPreviewSingleImage product={displayedProduct} />
  <HighlightedFeatures product={displayedProduct} />
</div>


     <ProductOverview
  product={displayedProduct}
  categoryLink={categoryLink}
  selectedColor={selectedColor}
  onColorChange={setSelectedColor}
/>

    </>
  );
};

export default ProductColorDetails;

