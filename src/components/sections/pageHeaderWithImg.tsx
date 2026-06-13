import { cn } from "@/lib/utils";
import React from "react";

const PageHeaderWithImg = ({
  bgImage = "/images/page-header.png",
  title,
  titleClass,
}: {
  bgImage?: string;
  title: string;
  titleClass?: string;
}) => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container xl:pt-[600px] lg:pt-[400px] pt-75">
        <div className="relative">
          <div className="absolute lg:-bottom-7.5 bottom-0 left-0">
            <h2
              className={cn(
                "text-white xl:text-[266px] lg:text-[200px] md:text-[150px] text-[80px] xl:leading-[1] leading-[1] xl:tracking-[-20px] sm:tracking-[-10px] tracking-[-5px] font-extrabold",
                titleClass,
              )}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderWithImg;
