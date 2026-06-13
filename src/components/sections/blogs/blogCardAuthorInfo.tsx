import { cn } from "@/lib/utils";
import { BlogType } from "@/mockData/blogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardAuthorInfo = ({ blog }:{ blog: BlogType }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center gap-2.5">
        <Image
          width={40}
          height={40}
          sizes="100vw"
          src={blog.author.image}
          alt={blog.author.name}
        />
        <span className={cn("text-[#B0B5BB] leading-8 md:text-lg by")}>by</span>
        <Link
          href={"#"}
          className="text-white md:text-lg md:leading-normal hover:text-blue transition-all duration-500 author-name"
        >
          {blog.author.name}
        </Link>
      </div>
      <span className="block w-[7px] h-[7px] shrink-0 bg-[#B0B5BB] rounded-full "></span>
      <div>
        <p className="md:text-lg md:leading-7 text-white date">
          {blog.date.day} {blog.date.month} {blog.date.year}
        </p>
      </div>
    </div>
  );
};

export default BlogCardAuthorInfo;
