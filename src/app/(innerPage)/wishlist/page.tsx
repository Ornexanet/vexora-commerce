import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import WishlistProducts from "./wishlistProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Wishlist",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const Wishlist = () => {
  return (
    <main>
      <PageHeader title="Wishlist" currentPageName="Wishlist" />
      <WishlistProducts />
    </main>
  );
};

export default Wishlist;
