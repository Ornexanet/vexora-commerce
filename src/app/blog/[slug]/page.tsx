import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const blog = blogData.find(
    (item) => item.slug === "samsung-galaxy-watch-ultra"
  );

  return (
    <main>
      <PageHeader
        title="Blog"
        praentPageHref="/blog"
        currentPageName={blog?.title || "Samsung Galaxy Watch Ultra"}
        praentPageName="Blog"
      />

      <section className="container mt-25">
        <div className="max-w-[1054px] mx-auto">
          <div className="max-w-[784px] mx-auto">
            <h1 className="font-extrabold xl:text-[56px] lg:text-5xl text-4xl xl:leading-[120%]">
              {blog?.title || "Samsung Galaxy Watch Ultra"}
            </h1>

            {blog && (
              <div className="mt-5 mb-10 flex items-center justify-between flex-wrap gap-3">
                <BlogCardAuthorInfo blog={blog} />
                <p className="text-lg">5 min read</p>
              </div>
            )}
          </div>

          <Image
            width={1054}
            height={549}
            sizes="100vw"
            src="/images/blogs/ornexa-shop-her1.webp"
            alt="Samsung Galaxy Watch Ultra"
            className="max-h-[549px] w-full rounded-[15px] mb-10"
          />

          <div className="max-w-[784px] mx-auto">
            <p className="text-lg text-light-dark leading-[160%]">
              Samsung Galaxy Watch Ultra är Samsungs mest avancerade smartklocka,
              utvecklad för användare som vill kombinera träning, hälsa och vardag
              i en enda enhet.
            </p>

            <Title asChild size="36" className="mb-4 mt-20">
              <h3>Varför välja Samsung Galaxy Watch Ultra?</h3>
            </Title>

            <p className="text-lg text-light-dark leading-[160%]">
              Galaxy Watch Ultra erbjuder hög prestanda, slitstark design,
              avancerad GPS och smarta hälsofunktioner direkt på handleden.
            </p>

            <div className="mt-12">
              <Link
                href="/product-details/18"
                className="inline-flex items-center justify-center rounded-lg bg-[#00AEEF] px-8 py-4 text-white font-semibold"
              >
                Köp Samsung Galaxy Watch Ultra
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
