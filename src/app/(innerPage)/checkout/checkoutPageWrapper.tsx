"use client";
import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/growth-events";

import CheckoutForm from "./checkoutForm";
import CheckoutPayment from "./checkoutPayment";

const CheckoutPageWrapper = () => {
  const hasTracked = useRef(false);

useEffect(() => {
  if (hasTracked.current) return;

  hasTracked.current = true;

  trackEvent("checkout_started");
}, []);

  const handleCheckout = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    alert(
      `Beställningen har lagts!\n\n${JSON.stringify(data, null, 2)}`
    );
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
