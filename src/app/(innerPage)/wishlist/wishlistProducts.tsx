"use client";

import React, { useState } from "react";
import { useWishlist } from "@/contextApi/wishlistContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { Minus, Plus } from "@/lib/icons";
import { useCart } from "@/contextApi/cartContext";
import { ProductType } from "@/mockData/products";
import { Button } from "@/components/ui/button";

const WishlistProducts = () => {
  const { wishlistItems } = useWishlist();
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const getQuantity = (id: number) => quantities[id] || 1;

  const incrementQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrementQuantity = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleAddToCart = (item: ProductType) => {
    addToCart(item, getQuantity(item.id));
    removeFromWishlist(item.id);
  };

  return (
    <div className="container mt-20">
      {wishlistItems.length === 0 ? (
        <div className="lg:p-12 p-8 text-center">
          <p className="text-xl text-light-dark">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow>
                <TableHead className="leading-normal px-0 pb-2.5 mt-0">
                  Product
                </TableHead>
                <TableHead className="leading-normal px-0 pb-2.5 mt-0">
                  Price
                </TableHead>
                <TableHead className="leading-normal px-0 pb-2.5 mt-0">
                  Quantity
                </TableHead>
                <TableHead className="leading-normal px-0 pb-2.5 mt-0">
                  Subtotal
                </TableHead>
                <TableHead className="w-6 px-0 py-2.5 mt-0"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishlistItems.map((item) => {
                const itemPrice = item.discount
                  ? item.price - item.discount
                  : item.price;
                const quantity = getQuantity(item.id);
                const subtotal = itemPrice * quantity;

                return (
                  <TableRow key={item.id} className="hover:bg-[#F9FAFB]/50">
                    {/* Product Info */}
                    <TableCell className="px-0 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-17.5 h-22.5 rounded-sm flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: item.backgroundColor || "#F5F5F7",
                          }}
                        >
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={60}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                        <Link
                          href="/product-details"
                          className="text-lg text-light-dark hover:text-blue transition-all duration-300"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </TableCell>

                    {/* Price */}
                    <TableCell className="text-lg font-medium px-0 py-6">
                      ${itemPrice}
                    </TableCell>

                    {/* Quantity Controls */}
                    <TableCell className="px-0 py-6">
                      <div className="inline-flex items-center gap-3 px-5 py-4 max-h-13.5 border-2 border-[#B0B5BB] rounded-lg">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="text-[#B0B5BB] hover:text-foreground transition-all duration-300"
                          disabled={getQuantity(item.id) <= 1}
                        >
                          <Minus className="size-6" />
                        </button>
                        <span className="text-lg font-bold w-8 text-center">
                          {String(getQuantity(item.id)).padStart(2, "0")}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="text-[#B0B5BB] hover:text-foreground transition-all duration-300"
                        >
                          <Plus className="size-6" />
                        </button>
                      </div>
                    </TableCell>

                    {/* Subtotal */}
                    <TableCell className="text-lg font-semibold px-0 py-6">
                      ${subtotal}
                    </TableCell>

                    {/* Remove Button */}
                    <TableCell className="px-0 py-6">
                      <div className="flex items-center gap-5">
                        <Button onClick={() => handleAddToCart(item)}>
                          Add To Cart
                        </Button>
                        <button
                          onClick={() => removeFromWishlist(item.id)}
                          className="size-10 shrink-0 flex items-center justify-center text-light-dark hover:text-red-500 transition-all duration-300"
                        >
                          <XIcon size={26} />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default WishlistProducts;
