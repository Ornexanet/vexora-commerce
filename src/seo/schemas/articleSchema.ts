import type { BlogType } from "@/mockData/blogData";
import { siteConfig } from "@/seo/config/siteConfig";

export function generateArticleSchema(blog: BlogType) {
  const articleUrl = `${siteConfig.url}/blog/${blog.slug}`;

  const imageUrl = blog.thumbnail.startsWith("http")
    ? blog.thumbnail
    : `${siteConfig.url}${blog.thumbnail}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#blogposting`,

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${articleUrl}#webpage`,
        },

        headline: blog.title,
        description: blog.description,

        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },

        author: {
          "@type": "Organization",
          name: blog.author.name,
          url: siteConfig.url,
        },

        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          logo: {
            "@type": "ImageObject",
            url: siteConfig.logo,
          },
        },

        datePublished: blog.publishedAt,
        dateModified:
          blog.modifiedAt || blog.publishedAt,

        articleSection: blog.category,
        keywords: blog.keywords,

        about: blog.entities.map((entity) => ({
          "@type": "Thing",
          name: entity,
        })),

        mentions: blog.relatedProduct
          ? [
              {
                "@type": "Product",
                name: blog.relatedProduct.name,
                url: blog.relatedProduct.url,
              },
            ]
          : undefined,

        isAccessibleForFree: true,
        inLanguage: "sv-SE",
      },

      ...(blog.faq
        ? [
            {
              "@type": "FAQPage",
              "@id": `${articleUrl}#faq`,
              mainEntity: blog.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
          ]
        : []),

      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Hem",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogg",
            item: `${siteConfig.url}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };
}


