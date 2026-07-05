import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Samsung Galaxy Watch Ultra Guide | Ornexa",
  description:
    "En komplett guide till Samsung Galaxy Watch Ultra med funktioner, fördelar, träningsanvändning och köpråd från Ornexa.",
};

const normalizeSlug = (value?: string) =>
  value?.toLowerCase().trim() ?? "";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const blog = blogData.find(
    (item) => normalizeSlug(item.slug) === normalizeSlug(slug)
  );

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title="Blog"
        praentPageHref="/blog"
        currentPageName={blog.title}
        praentPageName="Blog"
      />

      <section className="container mt-25">
        <div className="max-w-[1054px] mx-auto">
          <div className="max-w-[784px] mx-auto">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              {blog.title}
            </h1>

            <div className="mt-5 mb-10 flex items-center justify-between flex-wrap gap-3">
              <div className="[&_.by]:text-light-dark [&_.date]:text-foreground [&_.author-name]:text-foreground">
                <BlogCardAuthorInfo blog={blog} />
              </div>
              <p className="text-lg">5 min read</p>
            </div>
          </div>

          <div className="w-full mb-6">
            <Image
              width={1054}
              height={549}
              sizes="100vw"
              src="/images/blogs/ornexa-shop-her1.webp"
              alt={blog.title}
              className="max-h-[549px] w-full rounded-[15px]"
            />
          </div>

          <div className="[&_p]:text-lg [&_p]:text-light-dark [&_p]:leading-[160%] [&_p:not(:last-child)]:mb-5">
            <div className="max-w-[784px] mx-auto">
              <p>
                Samsung Galaxy Watch Ultra är Samsungs mest avancerade smartklocka,
                utvecklad för användare som vill kombinera träning, hälsa och vardag
                i en enda enhet.
              </p>

              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Varför välja Samsung Galaxy Watch Ultra?</h3>
              </Title>

              <p>
                Galaxy Watch Ultra erbjuder hög prestanda, slitstark design,
                avancerad GPS och smarta hälsofunktioner direkt på handleden.
              </p>

              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Tekniska specifikationer</h3>
              </Title>

              <ol className="list-decimal list-inside mt-4 space-y-1">
                <li className="text-light-dark text-lg">AMOLED-skärm med hög ljusstyrka</li>
                <li className="text-light-dark text-lg">Avancerad GPS</li>
                <li className="text-light-dark text-lg">Lång batteritid</li>
                <li className="text-light-dark text-lg">Hälsodata och träningsspårning</li>
                <li className="text-light-dark text-lg">Robust design</li>
              </ol>

              <Title asChild size="36" className="mb-4 mt-20">
                <h3>Sammanfattning</h3>
              </Title>

              <p>
                Samsung Galaxy Watch Ultra är ett komplett val för användare som söker
                en kraftfull smartklocka för träning, arbete och vardag.
              </p>

              <div className="max-w-[784px] mx-auto mt-12">
                <Link
                  href="/product-details/18"
                  className="inline-flex items-center justify-center rounded-lg bg-[#00AEEF] px-8 py-4 text-white font-semibold hover:opacity-90 transition"
                >
                  Köp Samsung Galaxy Watch Ultra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
