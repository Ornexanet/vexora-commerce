import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import BlogCardAuthorInfo from "./blogCardAuthorInfo";

const FeaturesBlogs = () => {
  return (
    <div className="mt-25">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-7.5">
          {blogData.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[15px]">
                <Image
                  width={650}
                  height={420}
                  sizes="100vw"
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-[360px] object-cover rounded-[15px] transition-all duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.75)_100%)] flex flex-col justify-end p-7.5 rounded-[15px]">
                  <div className="mb-3">
                    <BlogCardAuthorInfo blog={blog} />
                  </div>

                  <Title
                    size="28"
                    className="font-bold text-white group-hover:text-blue transition-all duration-500 line-clamp-2"
                  >
                    {blog.title}
                  </Title>

                  <p className="text-white/80 leading-[170%] mt-3 line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesBlogs;
