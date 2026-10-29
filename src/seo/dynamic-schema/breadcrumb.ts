import { siteConfig } from "@/seo/config/siteConfig";

type BreadcrumbItem = {
  name: string;
  path: string;
};

export function generateBreadcrumbSchema(
  items: BreadcrumbItem[]
) {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const lastItem = items[items.length - 1];
const pageUrl = `${baseUrl}${lastItem.path}`;


  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,


    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}
