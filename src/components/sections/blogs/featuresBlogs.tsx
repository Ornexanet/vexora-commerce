import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import BlogCardAuthorInfo from "./blogCardAuthorInfo";

const FeaturesBlogs = () => {
  const blog = blogData[0];
  return (
    <div className="mt-25">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-7.5">
          <div
            className="relative bg-cover bg-no-repeat bg-center rounded-[15px] pt-120"
            style={{ backgroundImage: `url(${blog.thumbnail})` }}
          >
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)] flex flex-col justify-end p-7.5 rounded-[15px]">
              <div className="mt-3 mb-2.5">
                <BlogCardAuthorInfo blog={blog} />
              </div>
              <Title
                asChild
                size="28"
                className="font-bold text-white hover:text-blue transition-all duration-500 line-clamp-2"
              >
                <Link href={`/blog/${blog.slug}`}>
                {blog.title}
                </Link>
              </Title>
            </div>
          </div>
          <div className="space-y-7.5">
            {blogData.slice(1, 3).map((blog) => (
              <div
                key={blog.id}
                className="flex sm:flex-row flex-col items-start gap-4"
              >
                <div className="w-full sm:basis-1/2">
                  <Image
                    width={384}
                    height={310}
                    sizes="100vw"
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-[15px]"
                  />
                </div>
                <div className="w-full sm:basis-1/2">
                  <Title
                    size="28"
                    asChild
                    className="font-bold mb-5 hover:text-blue transition-all duration-500 line-clamp-2"
                  >
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </Title>
                  <div className="my-5 [&_.by]:text-light-dark [&_.date]:text-foreground [&_.author-name]:text-foreground">
                    <BlogCardAuthorInfo blog={blog} />
                  </div>
                  <p className="text-[#494C50] leading-[170%]">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlogs;
