import { siteConfig } from "@/seo/config/siteConfig";

export type ProductData = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability: "InStock" | "OutOfStock" | "PreOrder";
  brand: string;
  sku?: string;
};

export function generateProductSchema(data: ProductData) {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");

  const productUrl = `${baseUrl}/product-details/${encodeURIComponent(data.id)}`;

  const imageUrl = new URL(data.image, `${baseUrl}/`).href;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,

    name: data.name,
    description: data.description,
    image: imageUrl,
    url: productUrl,

    ...(data.sku ? { sku: data.sku } : {}),

    brand: {
      "@type": "Brand",
      name: data.brand,
    },

    offers: {
      "@type": "Offer",
      url: productUrl,
      price: data.price,
      priceCurrency: data.currency ?? "SEK",
      availability: `https://schema.org/${data.availability}`,

      seller: {
        "@id": `${baseUrl}/#organization`,
      },
    },
  };
}

