"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/contextApi/cartContext";
import { trackEvent } from "@/lib/growth-events";
import CheckoutForm from "./checkoutForm";
import CheckoutPayment from "./checkoutPayment";
import { isDemoShippingMethod, type DemoShippingMethod } from "./checkoutSummary";

const CheckoutPageWrapper = () => {
  const { cartItems, isLoaded } = useCart();
  const [shippingMethod, setShippingMethod] = useState<DemoShippingMethod>("free");
  const [demoCompleted, setDemoCompleted] = useState(false);
  const [error, setError] = useState("");
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;
    trackEvent("checkout_started");
  }, []);

  const handleCheckout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDemoCompleted(false);
    setError("");

    if (!isLoaded || cartItems.length === 0) {
      setError("Lägg till en produkt i varukorgen innan du testar demokassan.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const selectedShipping = formData.get("shipping_method");
    if (!isDemoShippingMethod(selectedShipping) || selectedShipping !== shippingMethod) {
      setError("Välj ett av demofraktalternativen och försök igen.");
      return;
    }
    if (formData.get("demo_confirmation") !== "on") {
      setError("Bekräfta att du förstår att detta endast är en demonstration.");
      return;
    }

    // No request, order, payment, purchase event, or persistence of form data.
    setDemoCompleted(true);
  };

  if (!isLoaded) {
    return <p role="status" className="py-10 text-light-dark">Läser in varukorgen …</p>;
  }

  if (cartItems.length === 0) {
    return (
      <section className="rounded-xl bg-[#F5F5F5] p-7 text-center sm:p-10">
        <h2 className="text-2xl font-bold">Din varukorg är tom</h2>
        <p className="mt-3 text-light-dark">Lägg till produkter för att testa demokassan.</p>
        <Link href="/shop" className="mt-5 inline-block text-blue underline">Fortsätt handla</Link>
      </section>
    );
  }

  return (
    <form onSubmit={handleCheckout} aria-describedby="demo-checkout-notice">
      <div id="demo-checkout-notice" className="mb-7 rounded-xl border border-light-gray p-5">
        <h2 className="text-xl font-bold">Demokassa – ingen riktig beställning</h2>
        <p className="mt-2 text-light-dark">
          Detta är en experimentell portfoliobutik. Ingen betalning genomförs och inga varor skickas.
          Använd påhittade kontaktuppgifter. Uppgifterna skickas inte och sparas inte av demokassan.
          Ange inga kort- eller bankuppgifter.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7.5 lg:grid-cols-[auto_48.6%]">
        <CheckoutForm />
        <CheckoutPayment
          shippingMethod={shippingMethod}
          onShippingMethodChange={(method) => {
            setShippingMethod(method);
            setDemoCompleted(false);
            setError("");
          }}
        />
      </div>
      {error && <p role="alert" className="mt-5 text-red-600">{error}</p>}
      {demoCompleted && (
        <p role="status" className="mt-5 rounded-xl border border-light-gray p-5">
          Demonstrationen är klar. Ingen beställning har skapats, ingen betalning har genomförts
          och inga varor kommer att skickas. Dina kontaktuppgifter har inte skickats eller sparats.
          Varukorgen finns kvar.
        </p>
      )}
    </form>
  );
};

export default CheckoutPageWrapper;
