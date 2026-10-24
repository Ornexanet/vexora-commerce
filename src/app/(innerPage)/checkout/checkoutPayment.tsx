"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contextApi/cartContext";
import Image from "next/image";
import {
  DEMO_SHIPPING_METHODS,
  formatSEK,
  getCheckoutTotals,
  getItemUnitPrice,
  isDemoShippingMethod,
  type DemoShippingMethod,
} from "./checkoutSummary";

type CheckoutPaymentProps = {
  shippingMethod: DemoShippingMethod;
  onShippingMethodChange: (method: DemoShippingMethod) => void;
};

const CheckoutPayment = ({ shippingMethod, onShippingMethodChange }: CheckoutPaymentProps) => {
  const { cartItems, isLoaded, getCartTotal } = useCart();

  if (!isLoaded) return <p role="status">Läser in varukorgen …</p>;
  if (cartItems.length === 0) return <p role="status">Din varukorg är tom</p>;

  const totalQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
  const totals = getCheckoutTotals(getCartTotal(), totalQuantity, shippingMethod);

  return (
    <section aria-labelledby="checkout-summary-title" className="min-w-0 rounded-xl bg-[#F5F5F5] p-7 sm:p-10">
      <div className="rounded-lg border border-[#999796] p-5 sm:p-7.5">
        <h2 id="checkout-summary-title" className="rounded-md bg-primary py-3 text-center text-xl font-semibold text-white lg:text-2xl">
          Ordersammanfattning
        </h2>
        <ul aria-label="Produkter i varukorgen" className="mt-7.5 divide-y divide-light-gray">
          {cartItems.map((item) => {
            const unitPrice = getItemUnitPrice(item);
            return (
              <li key={item.id} className="flex flex-wrap gap-4 py-5">
                <Image src={item.thumbnail} alt={item.title} width={70} height={70} className="h-17.5 w-17.5 shrink-0 rounded bg-white object-contain" />
                <div className="min-w-0 flex-1 basis-36">
                  <h3 className="break-words text-lg font-medium">{item.title}</h3>
                  <p className="mt-1">Antal: {item.quantity}</p>
                  <p>Styckpris: {formatSEK(unitPrice)}</p>
                  {!!item.discount && (
                    <p className="text-sm text-light-dark">
                      Ordinarie styckpris: <del>{formatSEK(item.price)}</del>
                      <br />Rabatt per styck: {formatSEK(item.discount)}
                    </p>
                  )}
                  <p className="mt-2 font-semibold">Delsumma: {formatSEK(unitPrice * item.quantity)}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <fieldset className="mt-5 border-t border-light-gray pt-5">
          <legend className="text-lg font-medium">Frakt – endast demonstration</legend>
          <p id="demo-shipping-notice" className="mb-4 text-sm text-light-dark">
            Beloppen är påhittade exempel i SEK, inte verkliga fraktpriser eller leveranslöften.
          </p>
          <RadioGroup
            name="shipping_method"
            value={shippingMethod}
            onValueChange={(value) => {
              if (isDemoShippingMethod(value)) onShippingMethodChange(value);
            }}
            aria-label="Välj demofrakt"
            aria-describedby="demo-shipping-notice"
            required
          >
            {DEMO_SHIPPING_METHODS.map((method) => (
              <div key={method.id} className="flex items-center gap-3">
                <RadioGroupItem value={method.id} id={`demo-shipping-${method.id}`} />
                <Label htmlFor={`demo-shipping-${method.id}`} className="flex flex-1 flex-wrap justify-between gap-2 text-base">
                  <span>{method.label}</span><span>{formatSEK(method.amount)}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </fieldset>

        <dl aria-live="polite" aria-atomic="true" className="mt-7.5 space-y-4 border-t border-light-gray pt-5">
          <div className="flex flex-wrap justify-between gap-2"><dt>Delsumma efter produktrabatter</dt><dd>{formatSEK(totals.subtotal)}</dd></div>
          {totals.bundleDiscount > 0 && (
            <div className="flex flex-wrap justify-between gap-2"><dt>Paketdeal – 10 % rabatt</dt><dd>−{formatSEK(totals.bundleDiscount)}</dd></div>
          )}
          <div className="flex justify-between gap-2"><dt>Demofrakt</dt><dd>{formatSEK(totals.shipping)}</dd></div>
          <div className="flex flex-wrap justify-between gap-2 border-t border-light-gray pt-4 text-xl font-semibold"><dt>Totalt (demo)</dt><dd>{formatSEK(totals.total)}</dd></div>
        </dl>
      </div>

      <div className="mt-7.5">
        <h3 className="text-lg font-semibold">Ingen betalning</h3>
        <p className="mt-2 text-light-dark">Demokassan saknar betalningsintegration. Inga pengar dras och ingen beställning skickas till en butik.</p>
        <div className="mt-5 flex items-start gap-3">
          <Checkbox id="demo-confirmation" name="demo_confirmation" value="on" required className="mt-1 shrink-0" />
          <Label htmlFor="demo-confirmation" className="text-base font-normal">Jag förstår att detta endast är en demonstration och inte ett riktigt köp.</Label>
        </div>
        <Button type="submit" className="mt-7.5 h-auto min-h-[53px] w-full whitespace-normal px-3 text-center lg:text-lg">Testa demokassan – utan köp</Button>
      </div>
    </section>
  );
};

export default CheckoutPayment;
