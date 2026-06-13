import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { blogData } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogGrid = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap gap-x-5 gap-y-5 ">
          <Title>Tech Talk</Title>
          <Button asChild>
            <Link href={"/blog"} className="text-lg">
              View All Blogs
            </Link>
          </Button>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
          {blogData.slice(0, 3).map((blog) => (
            <div key={blog.id} className="bg-[#F3F5F8] p-2.5 rounded-2xl">
              <div>
                <Image
                  width={514}
                  height={349}
                  sizes="100vw"
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="rounded-[15px] w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 px-[15px] pb-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex items-center gap-2.5">
                    <Image
                      width={40}
                      height={40}
                      sizes="100vw"
                      src={blog.author.image}
                      alt={blog.author.name}
                    />
                    <span className="text-light-dark leading-8 md:text-lg">
                      by
                    </span>
                    <Link
                      href={"#"}
                      className="lg:text-lg lg:leading-normal text-black truncate hover:text-blue transition-all duration-500"
                    >
                      {blog.author.name}
                    </Link>
                  </div>
                  <span className="block w-[7px] h-[7px] shrink-0 bg-[#B0B5BB] rounded-full "></span>
                  <div>
                    <p className="lg:text-lg lg:leading-7 truncate">
                      {blog.date.day} {blog.date.month} {blog.date.year}
                    </p>
                  </div>
                </div>

                <Title
                  asChild
                  size="28"
                  className="hover:text-blue transition-all duration-500 text-[clamp(1.125rem,0.9435rem+0.8065vw,1.75rem)] line-clamp-2"
                >
                  <Link href={"/blog-details"}>{blog.title}</Link>
                </Title>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
