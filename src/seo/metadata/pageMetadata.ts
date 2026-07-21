import type { Metadata } from "next";
import { siteConfig } from "@/seo/config/siteConfig";

type PageMetadataProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
