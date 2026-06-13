import { Facebook, Instagram, LinkedIn } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogAuthorInfo = () => {
  return (
    <div className="rounded-[15px] bg-[#F5F5F7] p-6.5 flex md:flex-row flex-col md:items-center gap-4 max-w-[870px] mx-auto">
      <div className="shrink-0">
        <Image
          width={160}
          height={168}
          sizes="100vw"
          src={"/images/blogs/author.png"}
          alt="img"
          className="rounded-xl"
        />
      </div>
      <div className="text-[#5C6671]">
        <b className="font-medium text-[22px]">Eleanor Pena</b>
        <p className="mt-1 text-lg leading-[160%]">
          Founder and Creative Director of Next, an independent digital creative
          studio based out of NYC founded in 2011. He has over 15 years
          experience as an award-winning Creative Director/Art for clients.
        </p>
        <div className="mt-4 flex items-center gap-6">
          <Link
            href={"#"}
            className="hover:text-blue transition-all duration-500"
          >
            <Facebook />
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue transition-all duration-500"
          >
            <Instagram />
          </Link>
          <Link
            href={"#"}
            className="hover:text-blue transition-all duration-500"
          >
            <LinkedIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogAuthorInfo;
