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
import { CartItem, CartContextType } from "@/types/cart";
import { toast } from "sonner";

const CartContext = createContext<CartContextType | undefined>(undefined);

const isStoredCart = (value: unknown): value is CartItem[] =>
  Array.isArray(value) &&
  value.every((item: unknown) => {
    if (!item || typeof item !== "object") return false;
    const product = item as Record<string, unknown>;
    return (
      typeof product.id === "number" && Number.isFinite(product.id) &&
      typeof product.title === "string" && product.title.length > 0 &&
      typeof product.thumbnail === "string" && product.thumbnail.length > 0 &&
      typeof product.price === "number" && Number.isFinite(product.price) && product.price >= 0 &&
      typeof product.quantity === "number" && Number.isSafeInteger(product.quantity) && product.quantity > 0 &&
      (product.discount == null ||
        (typeof product.discount === "number" && Number.isFinite(product.discount) &&
          product.discount >= 0 && product.discount <= product.price))
    );
  });

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("Vexora-cart");
      if (savedCart) {
        const parsedCart: unknown = JSON.parse(savedCart);
        if (isStoredCart(parsedCart)) setCartItems(parsedCart);
      }
    } catch {
      // An unreadable cart must not prevent checkout from finishing hydration.
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("Vexora-cart", JSON.stringify(cartItems));
      } catch {
        // Keep the in-memory cart usable when browser storage is unavailable.
      }
    }
  }, [cartItems, isLoaded]);

  const addToCart = useCallback(
    (product: ProductType, quantity: number = 1) => {
      setCartItems((prev) => {
        const existingItem = prev.find((item) => item.id === product.id);
        if (existingItem) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          );
        }
        return [...prev, { ...product, quantity: quantity }];
      });
      toast.success("Produkten har lagts i varukorgen");
    },
    [],
  );

  const removeFromCart = useCallback((productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const incrementQuantity = useCallback((productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrementQuantity = useCallback((productId: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.discount ? item.price - item.discount : item.price;
      return total + itemPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      isLoaded,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
    }),
    [
      cartItems,
      isLoaded,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
