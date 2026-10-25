"use client";
import { useShopFilters } from "@/contextApi/shopFiltersProvider";

export default function ProductPagination() {
  const { products } = useShopFilters();
  return <div className="px-5 pt-[14px] pb-[14px] mt-[98px] flex justify-between items-center flex-wrap gap-5">
    <p role="status" aria-live="polite" className="text-light-dark tracking-[-0.18px] font-medium text-lg">
      Visar {products.length} {products.length === 1 ? "produkt" : "produkter"}
    </p>
  </div>;
}
