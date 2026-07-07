import BlogCard from "@/components/sections/blogs/blogCard";
import FeaturesBlogs from "@/components/sections/blogs/featuresBlogs";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Pagination from "@/components/ui/pagination";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogg | Ornexa Shop",
  description:
    "Utforska guider, recensioner och de senaste nyheterna om smartphones, hörlurar, smarta klockor och teknik från Ornexa.",
  alternates: {
    canonical: "https://shop.ornexa.net/blog",
  },
  openGraph: {
    title: "Blogg | Ornexa Shop",
    description:
      "Utforska guider, recensioner och de senaste nyheterna om smartphones, hörlurar, smarta klockor och teknik från Ornexa.",
    url: "https://shop.ornexa.net/blog",
    siteName: "Ornexa Shop",
    type: "website",
    images: [
      {
        url: "https://shop.ornexa.net/images/og/ornexa-shop-open-graph-blogg.webp",
        width: 1200,
        height: 630,
        alt: "Ornexa Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogg | Ornexa Shop",
    description:
      "Utforska guider, recensioner och de senaste nyheterna om teknik från Ornexa.",
    images: [
      "https://shop.ornexa.net/images/og/ornexa-blog-og.webp",
    ],
  },
};


const BlogArchive = () => {
   const blogJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://shop.ornexa.net/blog#webpage",
        url: "https://shop.ornexa.net/blog",
        name: "Blogg | Ornexa Shop",
        description:
          "Guider, recensioner och nyheter om smartphones, hörlurar, smarta klockor och teknik från Ornexa.",
        isPartOf: {
          "@id": "https://shop.ornexa.net/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://shop.ornexa.net/blog#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Hem",
            item: "https://shop.ornexa.net",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogg",
            item: "https://shop.ornexa.net/blog",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://shop.ornexa.net/blog#itemlist",
        name: "Ornexa Bloggartiklar",
        itemListElement: blogData.map((blog, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://shop.ornexa.net/blog/${blog.slug}`,
          name: blog.title,
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogJsonLd),
        }}
      />
      <PageHeaderWithImg title="Vexora Voice" />
      <FeaturesBlogs />
      <div className="mt-25">
        <div className="container">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-x-7.5 gap-y-15">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="mt-17.5 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogArchive;
