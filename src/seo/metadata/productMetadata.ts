import type { Metadata } from "next";
import type { ProductType } from "@/mockData/products";
import { siteConfig } from "@/seo/config/siteConfig";

export function generateProductMetadata(
  product: ProductType | undefined
): Metadata {
  if (!product) {
    return {
      title: `Produkten hittades inte | ${siteConfig.name}`,
      description:
        "Produkten du söker finns inte eller har tagits bort från Ornexa Shop.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const productUrl =
    `${siteConfig.url}/product-details/${product.id}`;

  const productImage =
    `${siteConfig.url}${product.thumbnail}`;

  const seoTitle =
    `${product.title} – Köp online | ${siteConfig.name}`;

  const seoDescription =
    `${product.description} Pris ${product.price} kr. Se specifikationer, funktioner och tillgänglighet hos ${siteConfig.name}.`;

  return {
    title: seoTitle,
    description: seoDescription,
    applicationName: siteConfig.name,

    alternates: {
      canonical: productUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: productUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: productImage,
          width: 1200,
          height: 630,
          alt: `${product.title} hos ${siteConfig.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [productImage],
    },

    other: {
      "product:price:amount": String(product.price),
      "product:price:currency": siteConfig.currency,
      "product:availability":
        product.availability === "Finns i lager"
          ? "in stock"
          : "out of stock",
      "product:brand":
        product.brand || siteConfig.organization.name,
    },
  };
}
