"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "@/lib/icons";
import QuickViewProduct from "@/components/sections/productDetails/quickViewProduct";
import { ProductType } from "@/mockData/products";
import { useCart } from "@/contextApi/cartContext";
import { useCompare } from "@/contextApi/compareContext";
import { XIcon } from "lucide-react";

const CompareTable = () => {
  const { addToCart } = useCart();
  const { compareItems, removeFromCompare } = useCompare();
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  const stock = true;

  const handleAddToCart = (product: ProductType) => {
    addToCart(product, 1);
  };
  return (
    <div className="container mt-7.5">
      <div className="overflow-x-auto">
        {compareItems.length > 0 ? (
          <div className="flex mi-w-[1250px]">
            {compareItems.map((product, index) => {
              const { price, thumbnail, title, discount, backgroundColor } =
                product;
              return (
                <div key={index}>
                  <div
                    className={`${index === 0 && "flex"} border-b pb-8 px-2.5`}
                  >
                    {index === 0 && (
                      <p className="font-medium lg:text-xl text-lg text-secondary-foreground 2xl:w-[280px] lg:w-[200px] w-[160px]">
                        Products
                      </p>
                    )}
                    <div>
                      <div
                        className="h-[230px] flex items-center justify-center rounded-lg relative"
                        style={{
                          backgroundColor: `${backgroundColor || "#f1f1f1"}`,
                        }}
                      >
                        <Image
                          src={thumbnail}
                          alt={title}
                          width={200}
                          height={200}
                          sizes="100vw"
                          className="max-h-50 object-contain"
                        />
                        <button
                          onClick={() => removeFromCompare(product.id)}
                          className="absolute top-2 right-2 rounded-full bg-white flex items-center justify-center cursor-pointer p-1"
                        >
                          <XIcon size={20} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Link
                          href={"#"}
                          className="text-secondary-foreground font-medium text-lg capitalize line-clamp-1 max-w-[200px] hover:text-blue transition-all duration-500"
                        >
                          {title}
                        </Link>
                        <div
                          onClick={() => {
                            setSelectedProduct(product);
                            setOpen(true);
                          }}
                          className="size-7.5 rounded-sm border flex justify-center items-center cursor-pointer hover:text-white hover:bg-primary transition-all duration-500"
                        >
                          <Eye />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${index === 0 && "flex"} border-b py-8 px-2.5`}
                  >
                    {index === 0 && (
                      <p className="font-medium lg:text-xl text-lg text-secondary-foreground 2xl:w-[280px] lg:w-[200px] w-[160px]">
                        SKU
                      </p>
                    )}
                    <p className="text-gray-1-foreground lg:text-xl text-lg line-clamp-1 max-w-[250px]">
                      01020304
                    </p>
                  </div>
                  <div
                    className={`${index === 0 && "flex"} border-b py-8 px-2.5`}
                  >
                    {index === 0 && (
                      <p className="font-medium lg:text-xl text-lg text-secondary-foreground 2xl:w-[280px] lg:w-[200px] w-[160px]">
                        Price
                      </p>
                    )}
                    <p className="text-secondary-foreground lg:text-xl text-lg">
                      {discount ? (
                        <span className="flex gap-[14px]">
                          <span className="text-blue">${price - discount}</span>
                          <del>${price}</del>
                        </span>
                      ) : (
                        <span>${price}</span>
                      )}
                    </p>
                  </div>
                  <div
                    className={`${index === 0 && "flex"} border-b py-8 px-2.5`}
                  >
                    {index === 0 && (
                      <p className="font-medium text-secondary-foreground lg:text-xl text-lg 2xl:w-[280px] lg:w-[200px] w-[160px]">
                        Availability
                      </p>
                    )}
                    {stock ? (
                      <p className="text-[#66995C] lg:text-xl text-lg">
                        {" "}
                        In Stock
                      </p>
                    ) : (
                      <p className="lg:text-xl text-lg text-secondary-foreground">
                        Out of stock
                      </p>
                    )}
                  </div>
                  <div
                    className={`${
                      index === 0 && "flex items-center"
                    } border-b py-8 px-2.5`}
                  >
                    {index === 0 && (
                      <p className="font-medium text-secondary-foreground lg:text-xl text-lg 2xl:w-[280px] lg:w-[200px] w-[160px]"></p>
                    )}
                    <Button
                      size={"sm"}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-secondary-foreground font-semibold text-2xl text-center capitalize">
            No Products in your compare page
          </p>
        )}
      </div>
      {selectedProduct && (
        <QuickViewProduct
          open={open}
          onOpenChange={setOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default CompareTable;
