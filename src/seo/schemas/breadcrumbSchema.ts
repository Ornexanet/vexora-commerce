import type { ProductType } from "@/mockData/products";
import { siteConfig } from "@/seo/config/siteConfig";

export function generateBreadcrumbSchema(product: ProductType) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.categories[0] || "Produkter",
        item: `${siteConfig.url}/shop-with-sidebar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${siteConfig.url}/product-details/${product.id}`,
      },
    ],
  };
}
