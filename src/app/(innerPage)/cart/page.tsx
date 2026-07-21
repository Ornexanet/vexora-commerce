import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import CartTable from "./cartTable";
import PriceSummary from "./priceSummary";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";

export const metadata = generatePageMetadata({
  title: "Varukorg | Ornexa Shop",
  description:
    "Se dina valda produkter i varukorgen innan du går vidare till kassan hos Ornexa.",
  path: "/cart",
  noindex: true,
});


const Cart = () => {
  const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Varukorg",
  url: "https://shop.ornexa.net/cart",
  isPartOf: {
    "@type": "WebSite",
    name: "Ornexa",
    url: "https://shop.ornexa.net",
  },
};
const breadcrumbSchema = {
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
      name: "Varukorg",
      item: "https://shop.ornexa.net/cart",
    },
  ],
};


  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(webPageSchema),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>


      <PageHeader title="Varukorg" currentPageName="Varukorg" />
      <section className="mt-7.5">
        <div className="container">
          <div className="grid lg:grid-cols-[1057fr_513fr] gap-x-7.5 gap-y-10 items-start">
            <CartTable />
            <PriceSummary />
          </div>
        </div>
      </section>
      <CompanyFeaturesSlider
        className="bg-transparent pt-0"
        cardClassName="bg-[#F5F5F7]"
      />
    </main>
  );
};

export default Cart;
