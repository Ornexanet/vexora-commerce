import type { ProductType } from "@/mockData/products";
import { siteConfig } from "@/seo/config/siteConfig";

export function generateProductSchema(product: ProductType) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.title,

    image: [
      `${siteConfig.url}${product.thumbnail}`,
      ...(product.gallery ?? []).map(
        (image) => `${siteConfig.url}${image}`
      ),
    ],

    description: product.description,
    sku: String(product.id),

    brand: {
      "@type": "Brand",
      name:
        product.brand ||
        siteConfig.organization.name,
    },

    category: product.categories.join(", "),

    offers: {
      "@type": "Offer",
      url:
        `${siteConfig.url}/product-details/${product.id}`,
      priceCurrency: siteConfig.currency,
      price: product.price,

      availability:
        product.availability === "Finns i lager"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",

      itemCondition:
        "https://schema.org/NewCondition",

      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };
}
