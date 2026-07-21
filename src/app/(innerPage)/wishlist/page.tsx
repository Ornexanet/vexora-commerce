import PageHeader from "@/components/sections/pageHeader";
import React from "react";
import WishlistProducts from "./wishlistProducts";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";



export const metadata = generatePageMetadata({
  title: "Önskelista | Ornexa Shop",
  description:
    "Se och hantera dina sparade produkter i önskelistan hos Ornexa Shop.",
  path: "/wishlist",
  noindex: true,
});


const Wishlist = () => {
  const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Önskelista",
  url: "https://shop.ornexa.net/wishlist",
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
      name: "Önskelista",
      item: "https://shop.ornexa.net/wishlist",
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

      <PageHeader title="Önskelista" currentPageName="Önskelista" />
      <WishlistProducts />
    </main>
  );
};

export default Wishlist;
