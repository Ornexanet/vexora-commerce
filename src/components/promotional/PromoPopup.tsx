
"use client";

import { useState } from "react";
import type { PromoProduct } from "@/types/promo";
import Image from "next/image";

export default function PromoPopup({
  product,
}: {
  product: PromoProduct;
}) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-10">

        {/* Close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Stäng erbjudandet"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 hover:bg-gray-200"
        >
          ×
        </button>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

          {/* Product information */}
          <div>
            <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Utvald produkt
            </span>

            <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
              {product.title}
            </h2>

            <p className="mt-4 text-gray-600">
              Upptäck en av våra utvalda produkter.
            </p>

            <p className="mt-6 text-3xl font-bold text-violet-600">
              {product.price.toLocaleString("sv-SE")} kr
            </p>
          </div>

          {/* Product image */}
          <div className="relative h-64 w-full rounded-2xl bg-violet-50 md:h-96">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-5"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

