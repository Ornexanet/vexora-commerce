import { siteConfig } from "@/seo/config/siteConfig";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: siteConfig.logo,

    brand: {
      "@type": "Brand",
      name: siteConfig.organization.name,
    },
  };
}
