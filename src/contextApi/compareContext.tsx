"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { ProductType } from "@/mockData/products";
import { CompareItem, CompareContextType } from "@/types/compare";
import { toast } from "sonner";

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};

export const CompareProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load compare from localStorage on mount
  useEffect(() => {
    const savedCompare = localStorage.getItem("Vexora-compare");
    if (savedCompare) {
      try {
        setCompareItems(JSON.parse(savedCompare));
      } catch (error) {
        console.error("Failed to parse compare items from localStorage", error);
        setCompareItems([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save compare to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("Vexora-compare", JSON.stringify(compareItems));
    }
  }, [compareItems, isLoaded]);

  const addToCompare = useCallback((product: ProductType) => {
    setCompareItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        toast.error("Product already in compare list");
        return prev;
      }

      if (prev.length >= 4) {
        toast.warning("Compare list is full (max 4 products)");
        return prev;
      }

      toast.success("Product added to compare");
      return [...prev, product];
    });
  }, []);

  const removeFromCompare = useCallback((productId: number) => {
    setCompareItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Product removed from compare");
  }, []);

  const isInCompare = useCallback(
    (productId: number) => {
      return compareItems.some((item) => item.id === productId);
    },
    [compareItems],
  );

  const clearCompare = useCallback(() => {
    setCompareItems([]);
  }, []);

  const value = useMemo(
    () => ({
      compareItems,
      addToCompare,
      removeFromCompare,
      isInCompare,
      clearCompare,
    }),
    [compareItems, addToCompare, removeFromCompare, isInCompare, clearCompare],
  );

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
};
