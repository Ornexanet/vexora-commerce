import { Facebook, Instagram, LinkedIn, Twitter } from "@/lib/icons";

import Link from "next/link";
import React from "react";

const BlogShareIcon = () => {
  return (
    <div className="flex items-center gap-5">
      <p className="text-lg">Share:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] w-9.5 h-8.5 rounded-[5px] text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          <Facebook />
        </Link>
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] w-9.5 h-8.5 rounded-[5px] text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          <Twitter />
        </Link>
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] w-9.5 h-8.5 rounded-[5px] text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          <Instagram />
        </Link>
        <Link
          href={"#"}
          className="border border-[#7C848C] px-2.5 flex items-center justify-center text-[#7C848C] w-9.5 h-8.5 rounded-[5px] text-sm hover:text-blue transition-all duration-300 hover:border-blue"
        >
          <LinkedIn />
        </Link>
      </div>
    </div>
  );
};

export default BlogShareIcon;
