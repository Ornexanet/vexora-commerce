import type { MetadataRoute } from "next";
import { siteConfig } from "@/seo/config/siteConfig";
import { allProducts } from "@/mockData/products";
import { blogData } from "@/mockData/blogData";



export default function sitemap(): MetadataRoute.Sitemap {
 const productPages: MetadataRoute.Sitemap = allProducts.map((product) => ({
  url: `${siteConfig.url}/product-details/${product.id}`,
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
}));
const blogPages: MetadataRoute.Sitemap = blogData.map((blog) => ({
  url: `${siteConfig.url}/blog/${blog.slug}`,
  lastModified: new Date(blog.modifiedAt || blog.publishedAt),
  changeFrequency: "monthly",
  priority: 0.7,
}));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/shop-with-sidebar`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/mobiler`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/horlurar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/smarta-klockor`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/tillbehor`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
  url: `${siteConfig.url}/privacy-policy`,
  lastModified: new Date(),
  changeFrequency: "yearly",
  priority: 0.4,
},
{
  url: `${siteConfig.url}/returer-och-aterbetalningar`,
  lastModified: new Date(),
  changeFrequency: "yearly",
  priority: 0.5,
},

    ...productPages,
    ...blogPages,
  ];
}
