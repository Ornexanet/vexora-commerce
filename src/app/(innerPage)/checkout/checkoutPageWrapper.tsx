"use client";
import React, { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import CheckoutForm from "./checkoutForm";
import CheckoutPayment from "./checkoutPayment";
import { sendGAEvent } from "@next/third-parties/google";


const CheckoutPageWrapper = () => {
useEffect(() => {
  trackEvent("checkout_started");

  console.log("GA4 BEGIN CHECKOUT");

  sendGAEvent("event", "begin_checkout", {
    currency: "SEK",
  });
}, []);


  const handleCheckout = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    trackEvent("purchase_completed");
    alert(`Order Placed!\n\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <form action={handleCheckout}>
      <div className="grid lg:grid-cols-[auto_48.6%] grid-cols-1 gap-7.5">
        <CheckoutForm />
        <CheckoutPayment />
      </div>
    </form>
  );
};

export default CheckoutPageWrapper;
