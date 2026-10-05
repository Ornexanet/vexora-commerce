"use client";

import React, { useState } from "react";
import Title from "@/components/ui/title";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contextApi/cartContext";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";


const PriceSummary = () => {
  const { getCartTotal, cartItems } = useCart();
  const [shippingMethod, setShippingMethod] = useState("free");

  const subtotal = getCartTotal();
  const totalQuantity = cartItems.reduce(
  (total, item) => total + item.quantity,
  0
);
const discountRate = totalQuantity >= 2 ? 0.1 : 0;
const bundleDiscount = subtotal * discountRate;
  
  const shippingCost =
    shippingMethod === "local" ? 5 : shippingMethod === "flat" ? 15 : 0;

  const total = subtotal - bundleDiscount + shippingCost;
  const handleBeginCheckout = () => {
  sendGAEvent("event", "begin_checkout", {
    currency: "SEK",
    value: total,
    items: cartItems.map((item) => ({
      item_id: String(item.id),
      item_name: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
  });
};



  return (
    <div className="sticky top-0">
      <Title size="28" className="font-bold leading-normal mb-2.5">
        Ordersammanfattning
      </Title>
      <div className="border border-light-gray rounded-2xl py-7.5">
        {/* Subtotal */}
        <div className="flex items-center justify-between pl-5 pr-7.5 pb-5 border-b border-light-gray">
          <span className="font-bold text-lg leading-normal">Delsumma</span>
          <span className="font-bold text-lg leading-normal">
            {subtotal.toFixed(2)} kr
          </span>
        </div>

     {totalQuantity >= 2 && (
  <div className="flex items-center justify-between pl-5 pr-7.5 py-5 border-b border-light-gray">
    <span className="font-bold text-lg">
      Paketdeal – 10% rabatt
    </span>

    <span className="font-bold text-lg">
      -{bundleDiscount.toFixed(2)} kr
    </span>
  </div>
)}

        {/* Shipping */}
        <div className="py-5 pl-5 pr-7.5 border-b border-light-gray">
          <span className="font-bold leading-normal text-lg">Leverans</span>
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
                  Fri frakt
                </span>
              </div>
              <span className="font-bold text-lg">0 kr</span>
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
                  Hämta i butik:
                </span>
              </div>
              <span className="font-bold text-lg">5 kr</span>
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
                  Fast fraktavgift:
                </span>
              </div>
              <span className="font-bold text-lg">15 kr</span>
            </label>
          </div>

          <div className="mt-7.5 flex items-center justify-between">
            <span className="text-lg leading-normal">
              Leverns till <span className="font-bold text-black"></span>
            </span>
            <button className="text-blue text-lg underline-offset-4 underline">
              Ändra address 
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-5 pr-7.5 pl-5">
          <span className="font-bold text-lg">Totalt</span>
          <span className="font-bold text-lg">{total.toFixed(2)} kr</span>
        </div>

        <div className="my-7.5 pr-7.5 pl-5">
          <Button asChild className="w-full">
            <Link href="/checkout" onClick={handleBeginCheckout}>
              Gå till kassan
              </Link>

          </Button>
        </div>

        <p className="text-center text-lg font-medium">
          Säker och trygg betalning
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
