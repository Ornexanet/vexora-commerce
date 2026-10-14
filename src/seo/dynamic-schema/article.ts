import { siteConfig } from "@/seo/config/siteConfig";


export type ArticleData = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  author: {
    name: string;
  };
  publishedAt: string;
  modifiedAt?: string;
  category: string;
  keywords: string[];
  entities: string[];
  relatedProduct?: {
    name: string;
    url: string;
  };
};
export function generateArticleSchema(data: ArticleData) {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");

  const articleUrl = `${baseUrl}/blog/${encodeURIComponent(data.slug)}`;
  const imageUrl = new URL(data.thumbnail, `${baseUrl}/`).href;


  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#blogposting`,
    url: articleUrl,
    headline: data.title,
description: data.description,
image: {
  "@type": "ImageObject",
  url: imageUrl,
},
datePublished: data.publishedAt,
dateModified: data.modifiedAt ?? data.publishedAt,
author: {
  "@type": "Person",
  name: data.author.name,
},
publisher: {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
},
inLanguage: "sv-SE",
articleSection: data.category,
keywords: data.keywords,
about: data.entities.map((entity) => ({
  "@type": "Thing",
  name: entity,
})),
mentions: data.relatedProduct
  ? {
      "@type": "Product",
      name: data.relatedProduct.name,
      url: data.relatedProduct.url,
    }
  : undefined,

isAccessibleForFree: true,


  };
}


