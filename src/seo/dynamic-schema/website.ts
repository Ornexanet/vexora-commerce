import { siteConfig } from "@/seo/config/siteConfig";

export function generateWebsiteSchema() {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,

    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    inLanguage: siteConfig.locale.replace("_", "-"),


    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}

