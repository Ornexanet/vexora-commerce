import { siteConfig } from "@/seo/config/siteConfig";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.organization.url}#organization`,

    name: siteConfig.organization.name,
    url: siteConfig.organization.url,
    logo: siteConfig.logo,
    sameAs: [
  "https://www.linkedin.com/company/ornexa/",
],


    brand: {
      "@type": "Brand",
      name: siteConfig.organization.name,
    },
  };
}
