import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

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
              <BlogCardAuthorInfo blog={blog} />
              <p className="text-lg">5 min läs</p>
            </div>
          </div>

          <Image
            width={1054}
            height={549}
            sizes="100vw"
            src={blog.thumbnail}
            alt={blog.title}
            className="max-h-[549px] w-full rounded-[15px] mb-10 object-cover"
          />

          <article className="max-w-[784px] mx-auto">
            <p className="text-lg text-light-dark leading-[160%]">
              {blog.intro || blog.description}
            </p>

            {blog.secondImage && (
              <Image
                width={785}
                height={471}
                sizes="100vw"
                src={blog.secondImage}
                alt={blog.title}
                className="rounded-[15px] w-full mt-12 mb-12 object-cover"
              />
            )}

            {blog.sections?.map((section) => (
              <div key={section.heading} className="mt-16">
                <Title asChild size="36" className="mb-4">
                  <h2>{section.heading}</h2>
                </Title>
                <p className="text-lg text-light-dark leading-[160%]">
                  {section.body}
                </p>
              </div>
            ))}

            {blog.features && (
              <div className="mt-16">
                <Title asChild size="36" className="mb-4">
                  <h2>Viktiga fördelar</h2>
                </Title>

                <ul className="list-disc pl-6 space-y-3 text-lg text-light-dark leading-[160%]">
                  {blog.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {blog.specs && (
              <div className="mt-16">
                <Title asChild size="36" className="mb-4">
                  <h2>Tekniska specifikationer</h2>
                </Title>

                <div className="space-y-3">
                  {blog.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between gap-6 border-b pb-3 text-lg"
                    >
                      <span className="font-semibold">{spec.label}</span>
                      <span className="text-light-dark text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {blog.faq && (
              <div className="mt-16">
                <Title asChild size="36" className="mb-4">
                  <h2>Vanliga frågor</h2>
                </Title>

                <div className="space-y-6">
                  {blog.faq.map((item) => (
                    <div key={item.question}>
                      <h3 className="text-2xl font-bold">{item.question}</h3>
                      <p className="text-lg text-light-dark leading-[160%]">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12">
              <Link
                href={blog.productHref || "/shop"}
                className="inline-flex items-center justify-center rounded-lg bg-[#00AEEF] px-8 py-4 text-white font-semibold hover:opacity-90 transition"
              >
                {blog.ctaText || "Köp produkten nu"}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
