import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import CheckoutPageWrapper from "./checkoutPageWrapper";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";


export const metadata = generatePageMetadata({
  title: "Kassa | Ornexa Shop",
  description:
    "Slutför ditt köp tryggt och enkelt hos Ornexa. Ange dina uppgifter, granska din order och välj betalningsmetod.",
  path: "/checkout",
  noindex: true,
});

const Checkout = () => {
 const checkoutSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Kassa",
    url: "https://shop.ornexa.net/checkout",
    description:
      "Slutför ditt köp tryggt och enkelt hos Ornexa. Ange dina uppgifter, granska din order och välj betalningsmetod.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: "https://shop.ornexa.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kassa",
        item: "https://shop.ornexa.net/checkout",
      },
    ],
  },
];


  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(checkoutSchema),
  }}
/>

      <PageHeader title="Kassa" currentPageName="Kassa" />
      <div className="container mt-7.5">
        <CheckoutPageWrapper />
      </div>
    </main>
  );
};

export default Checkout;
