import React from "react";
import CompareTable from "./compareTable";
import PageHeader from "@/components/sections/pageHeader";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";

export const metadata = generatePageMetadata({
  title: "Jämför produkter | Ornexa Shop",
  description:
    "Jämför produkter på Ornexa och se skillnader i pris, tillgänglighet och viktiga produktdetaljer.",
  path: "/compare",
  noindex: true,
});


const Compare = () => {
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
      name: "Jämför produkter",
      item: "https://shop.ornexa.net/compare",
    },
  ],
};

  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>



      <PageHeader title="Compare" currentPageName="Compare" />
      <CompareTable />
    </main>
  );
};

export default Compare;
