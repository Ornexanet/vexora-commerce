import { siteConfig } from "@/seo/config/siteConfig";

export function generateOrganizationSchema() {
  const baseUrl = siteConfig.organization.url.replace(/\/+$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,

    name: siteConfig.organization.name,
    url: baseUrl,
    logo: siteConfig.logo,

    brand: {
      "@type": "Brand",
      name: siteConfig.organization.name,
    },
  };
}

