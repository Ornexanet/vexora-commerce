import { ArrowLeft, ArrowRight } from "@/lib/icons";
import Link from "next/link";
import React from "react";

const NextPrevPost = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-x-5 max-w-[870px] mx-auto">
      <div className="flex items-center gap-5">
        <Link
          href={"#"}
          className="size-15 flex items-center justify-center bg-[#2E4DFE0D] rounded-lg hover:text-blue transition-all duration-500"
        >
          <ArrowLeft className="size-10 [&_path]:stroke-1" />
        </Link>
        <Link
          href={"#"}
          className="text-lg hover:text-blue transition-all duration-500 text-start max-w-[307px]"
        >
          The Rise of Video Content: Trends and Strategies for Success
        </Link>
      </div>
      <div className="h-15 w-px bg-[#2E4DFE0D]"></div>
      <div className="flex items-center gap-5">
        <Link
          href={"#"}
          className="text-lg hover:text-blue transition-all duration-500 text-end max-w-[307px]"
        >
          The Rise of Video Content: Trends and Strategies for Success
        </Link>
        <Link
          href={"#"}
          className="size-15 flex items-center justify-center bg-[#2E4DFE0D] rounded-lg hover:text-blue transition-all duration-500"
        >
          <ArrowRight className="size-10 [&_path]:stroke-1" />
        </Link>
      </div>
    </div>
  );
};

export default NextPrevPost;
