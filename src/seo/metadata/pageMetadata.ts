import type { Metadata } from "next";
import { siteConfig } from "@/seo/config/siteConfig";

type PageMetadataProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
};

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  imageAlt,
  noindex = false,
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.url}${image}`
    : undefined;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noindex,
      follow: !noindex,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: imageAlt || title,
          },
        ],
      }),
    },

    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
  };
}

