"use client";

import React, { memo } from "react";
import { CartProvider } from "./cartContext";

export const Providers = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
     {children}
    </CartProvider>
  );
});

Providers.displayName = "Providers";
