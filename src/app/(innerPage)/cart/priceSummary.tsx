"use client";

import React, { useState } from "react";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contextApi/cartContext";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PriceSummary = () => {
  const { getCartTotal } = useCart();
  const [shippingMethod, setShippingMethod] = useState("free");

  const subtotal = getCartTotal();
  const couponDiscount = 50;
  const shippingCost =
    shippingMethod === "local" ? 5 : shippingMethod === "flat" ? 15 : 0;

  const total = subtotal - couponDiscount + shippingCost;

  return (
    <div className="sticky top-0">
      <Title size="28" className="font-bold leading-normal mb-2.5">
        Cart Totals
      </Title>
      <div className="border border-light-gray rounded-2xl py-7.5">
        {/* Subtotal */}
        <div className="flex items-center justify-between pl-5 pr-7.5 pb-5 border-b border-light-gray">
          <span className="font-bold text-lg leading-normal">Subtotal</span>
          <span className="font-bold text-lg leading-normal">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        {/* Coupon */}
        <div className="flex items-center justify-between pl-5 pr-7.5 py-5 border-b border-light-gray">
          <span className="font-bold leading-normal text-lg">
            Coupon: get20off
          </span>
          <div className="text-right">
            <span className="font-bold leading-normal text-lg block">
              ${couponDiscount}
            </span>
            <button className="text-blue underline hover:no-underline">
              [remove]
            </button>
          </div>
        </div>

        {/* Shipping */}
        <div className="py-5 pl-5 pr-7.5 border-b border-light-gray">
          <span className="font-bold leading-normal text-lg">Shipping</span>
          <div className="space-y-2 mt-5">
            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-6.5 rounded-full border flex items-center justify-center transition-colors",
                    shippingMethod === "free"
                      ? "border-[6px] border-blue"
                      : "border-[#DBDFE9] group-hover:border-blue/50",
                  )}
                ></div>
                <input
                  type="radio"
                  name="shipping"
                  className="hidden"
                  checked={shippingMethod === "free"}
                  onChange={() => setShippingMethod("free")}
                />
                <span className="font-medium text-lg text-[#252F4A]">
                  Free Shipping
                </span>
              </div>
              <span className="font-bold text-lg">$0.00</span>
            </label>

            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-6.5 rounded-full border flex items-center justify-center transition-colors",
                    shippingMethod === "local"
                      ? "border-[6px] border-blue"
                      : "border-[#DBDFE9] group-hover:border-blue/50",
                  )}
                ></div>
                <input
                  type="radio"
                  name="shipping"
                  className="hidden"
                  checked={shippingMethod === "local"}
                  onChange={() => setShippingMethod("local")}
                />
                <span className="font-medium text-lg text-[#252F4A]">
                  Local Pickup:
                </span>
              </div>
              <span className="font-bold text-lg">$5.00</span>
            </label>

            <label className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "size-6.5 rounded-full border flex items-center justify-center transition-colors",
                    shippingMethod === "flat"
                      ? "border-[6px] border-blue"
                      : "border-[#DBDFE9] group-hover:border-blue/50",
                  )}
                ></div>
                <input
                  type="radio"
                  name="shipping"
                  className="hidden"
                  checked={shippingMethod === "flat"}
                  onChange={() => setShippingMethod("flat")}
                />
                <span className="font-medium text-lg text-[#252F4A]">
                  Flat rate:
                </span>
              </div>
              <span className="font-bold text-lg">$15.00</span>
            </label>
          </div>

          <div className="mt-7.5 flex items-center justify-between">
            <span className="text-lg leading-normal">
              Shipping to <span className="font-bold text-black">New York</span>
            </span>
            <button className="text-blue text-lg underline-offset-4 underline">
              Change address
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-5 pr-7.5 pl-5">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>

        <div className="my-7.5 pr-7.5 pl-5">
          <Button asChild className="w-full">
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
        </div>

        <p className="text-center text-lg font-medium">
          Safe And Secure Checkout
        </p>

        {/* Payment Icons */}
        <div className="mt-3 flex items-center justify-center">
          <Image
            width={360}
            height={52}
            src="/images/payment-card.png"
            alt="payment"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
