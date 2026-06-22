"use client";

import React, { memo } from "react";
import { CartProvider } from "./cartContext";
import { WishlistProvider } from "./wishlistContext";
import { CompareProvider } from "./compareContext";

export const Providers = memo(({ children }: { children: React.ReactNode }) => {
  return (
  <>
    {children}
  </>
);

});

Providers.displayName = "Providers";
