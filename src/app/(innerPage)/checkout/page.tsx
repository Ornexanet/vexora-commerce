import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import CheckoutPageWrapper from "./checkoutPageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kassa | Ornexa Shop",
  description:
    "Slutför ditt köp tryggt och enkelt hos Ornexa. Ange dina uppgifter, granska din order och välj betalningsmetod.",
    alternates: {
      canonical: "https://shop.ornexa.net/checkout",
    },
};
const Checkout = () => {
  return (
    <main>
      <PageHeader title="Kassa" currentPageName="Kassa" />
      <div className="container mt-7.5">
        <CheckoutPageWrapper />
      </div>
    </main>
  );
};

export default Checkout;
