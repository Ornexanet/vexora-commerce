import BlogCardAuthorInfo from "@/components/sections/blogs/blogCardAuthorInfo";
import PageHeader from "@/components/sections/pageHeader";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
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
              <p className="text-lg">3 min läs</p>
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

          <div className="max-w-[784px] mx-auto">
            <p className="text-lg text-light-dark leading-[160%]">
              {blog.description}
            </p>

            <Title asChild size="36" className="mb-4 mt-20">
              <h3>Om {blog.title}</h3>
            </Title>

            <p className="text-lg text-light-dark leading-[160%]">
              {blog.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
