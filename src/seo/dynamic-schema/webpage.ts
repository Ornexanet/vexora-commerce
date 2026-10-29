import { siteConfig } from "@/seo/config/siteConfig";

type WebPageData = {
  title: string;
  description: string;
  path: string;
};

export function generateWebPageSchema(data: WebPageData) {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const pageUrl = `${baseUrl}${data.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,

    name: data.title,
    description: data.description,
    url: pageUrl,

    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
breadcrumb: {
  "@id": `${pageUrl}#breadcrumb`,
},

    about: {
      "@id": `${baseUrl}/#organization`,
    },

    inLanguage: siteConfig.locale.replace("_", "-"),
  };
}
