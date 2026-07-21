import type { Metadata } from "next";
import type { BlogType } from "@/mockData/blogData";
import { siteConfig } from "@/seo/config/siteConfig";

export function generateBlogMetadata(
  blog: BlogType | undefined
): Metadata {
  if (!blog) {
    return {
      title: `Bloggartikel hittades inte | ${siteConfig.name}`,
      description:
        "Den efterfrågade bloggartikeln kunde inte hittas.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${siteConfig.url}/blog/${blog.slug}`;

  const imageUrl = blog.thumbnail.startsWith("http")
    ? blog.thumbnail
    : `${siteConfig.url}${blog.thumbnail}`;

  const title = `${blog.title} | ${siteConfig.name}`;

  return {
    title,
    description: blog.description,
    keywords: blog.keywords,
    applicationName: siteConfig.name,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description: blog.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.modifiedAt || blog.publishedAt,
      authors: [blog.author.name],
      tags: blog.keywords,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: blog.description,
      images: [imageUrl],
    },
  };
}

