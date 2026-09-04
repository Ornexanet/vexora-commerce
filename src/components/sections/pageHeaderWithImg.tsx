import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const PageHeaderWithImg = ({
  bgImage = "/images-optimized/page-header.webp",
  title,
  titleClass,
  as = "h2",
}: {

  bgImage?: string;
  title: string;
  titleClass?: string;
  as?: "h1" | "h2"
}) => {
  const HeadingTag = as;

  return (
    <section
   className="relative overflow-hidden">
  <Image
  src={bgImage}
  alt={title}
  width={1600}
  height={854}
  priority
  sizes="100vw"
  className="absolute inset-0 h-full w-full object-cover object-center -z-10"
/>



      <div className="container xl:pt-[600px] lg:pt-[400px] pt-75">
        <div className="relative">
          <div className="absolute lg:-bottom-7.5 bottom-0 left-0">
            <HeadingTag
              className={cn(
                "text-white xl:text-[266px] lg:text-[200px] md:text-[150px] text-[80px] xl:leading-[1] leading-[1] xl:tracking-[-20px] sm:tracking-[-10px] tracking-[-5px] font-extrabold",
                titleClass,
              )}
            >
              {title}
            </HeadingTag>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderWithImg;
