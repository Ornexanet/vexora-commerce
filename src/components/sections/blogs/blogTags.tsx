import Link from "next/link";
import React from "react";

const BlogTags = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <p className="text-lg">Tags:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] h-8 rounded-lg text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          Technology
        </Link>
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] h-8 rounded-lg text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          Innovation
        </Link>
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] h-8 rounded-lg text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          Design
        </Link>
      </div>
    </div>
  );
};

export default BlogTags;
