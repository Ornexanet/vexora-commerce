import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import CheckoutPageWrapper from "./checkoutPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vexora - Checkout",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};
const Checkout = () => {
  return (
    <main>
      <PageHeader title="Checkout" currentPageName="Checkout" />
      <div className="container mt-7.5">
        <CheckoutPageWrapper />
      </div>
    </main>
  );
};

export default Checkout;
