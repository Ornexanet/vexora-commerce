"use client";

import Title from "@/components/ui/title";
import React from "react";
import { useCart } from "@/contextApi/cartContext";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, XIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CartTable = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useCart();

  if (cartItems.length === 0) {
    return (
      <div className="">
        <div className="bg-[#F5F5F7] rounded-lg p-12 text-center">
          <p className="text-xl text-light-dark">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0">
      <Title asChild size="28" className="font-bold leading-normal">
        <h6>Cart Summary</h6>
      </Title>
      <div className="border border-dashed border-[#B0B5BB] rounded-lg px-7.5 py-4 bg-[#F5F5F7] mt-2.5">
        <p className="text-lg font-medium">
          Congratulations! Your order is eligible for FREE Delivery.
        </p>
        <div className="mt-4 w-full h-1.5 bg-[#16A34A] rounded-lg"></div>
      </div>

      {/* Cart Table */}
      <div className="mt-7.5">
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
              {cartItems.map((item) => {
                const itemPrice = item.discount
                  ? item.price - item.discount
                  : item.price;
                const subtotal = itemPrice * item.quantity;

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
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={24} />
                        </button>
                        <span className="text-lg font-bold w-8 text-center">
                          {String(item.quantity).padStart(2, "0")}
                        </span>
                        <button
                          onClick={() => incrementQuantity(item.id)}
                          className="text-[#B0B5BB] hover:text-foreground transition-all duration-300"
                        >
                          <Plus size={24} />
                        </button>
                      </div>
                    </TableCell>

                    {/* Subtotal */}
                    <TableCell className="text-lg font-semibold px-0 py-6">
                      ${subtotal}
                    </TableCell>

                    {/* Remove Button */}
                    <TableCell className="px-0 py-6">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="size-10 flex items-center justify-center text-light-dark hover:text-red-500 transition-all duration-300"
                      >
                        <XIcon size={24} />
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="pt-8 border-t border-light-gray flex items-center justify-between flex-wrap gap-5">
          <div className="h-12 max-w-[379px] w-full rounded-md relative overflow-hidden">
            <Input
              placeholder="Coupon code"
              className="text-lg h-full rounded-md pr-40"
            />
            <button className="bg-[#B0B5BB] hover:bg-[#B0B5BB]/80 transition-all duration-300 text-white px-4 h-12 block absolute right-0 top-0">
              Apply coupon
            </button>
          </div>
          <Button>Update Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
