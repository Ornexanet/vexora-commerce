"use client";
import { createContext, ReactNode, useContext } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getShopResults } from "@/lib/shopFilters";

type Filters = ReturnType<typeof getShopResults> & {
  update: (values: Record<string, string[]>) => void;
  reset: () => void;
};
const Context = createContext<Filters | null>(null);
export default function ShopFiltersProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();
  const update = (values: Record<string, string[]>) => {
    const params = new URLSearchParams(search.toString());
    for (const [key, entries] of Object.entries(values)) {
      params.delete(key);
      for (const value of entries) params.append(key, value);
    }
    const query = params.toString();
    router.replace(pathname + (query ? `?${query}` : ""), { scroll: false });
  };
  return <Context.Provider value={{ ...getShopResults(pathname, new URLSearchParams(search.toString())), update, reset: () => update({ brand: [], min: [], max: [] }) }}>{children}</Context.Provider>;
}
export function useShopFilters() {
  const context = useContext(Context);
  if (!context) throw new Error("useShopFilters requires ShopFiltersProvider");
  return context;
}
