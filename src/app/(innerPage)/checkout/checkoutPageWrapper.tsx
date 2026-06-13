"use client";
import React from "react";
import CheckoutForm from "./checkoutForm";
import CheckoutPayment from "./checkoutPayment";

const CheckoutPageWrapper = () => {
  const handleCheckout = (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
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
