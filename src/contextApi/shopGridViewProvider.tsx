"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  Suspense,
} from "react";
import ShopFiltersProvider from "./shopFiltersProvider";

export type ShopContextType = {
  shopView: string;
  setShopView: Dispatch<SetStateAction<string>>;
};

export const ShopGridViewContext = createContext<ShopContextType | null>(null);

const ShopGridViewProvider = ({ children }: { children: ReactNode }) => {
  const [shopView, setShopView] = useState("default");
  return (
    <ShopGridViewContext value={{ shopView, setShopView }}>
      <Suspense fallback={<p role="status">Läser in produkter …</p>}>
        <ShopFiltersProvider>{children}</ShopFiltersProvider>
      </Suspense>
    </ShopGridViewContext>
  );
};

export default ShopGridViewProvider;

export const useShopGridView = () => {
  const context = useContext(ShopGridViewContext);

  if (!context) {
    throw new Error("useShopGridView must be used within ShopGridViewProvider");
  }

  const { shopView, setShopView } = context;
  return { shopView, setShopView };
};
