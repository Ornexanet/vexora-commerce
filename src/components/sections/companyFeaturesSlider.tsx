"use client";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { companyFeaturesData } from "@/mockData/companyFeaturesData";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../ui/title";

const CompanyFeaturesSlider = ({
  className,
  cardClassName,
}: {
  className?: string;
  cardClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesOffset, setSlidesOffset] = useState(0);

  useEffect(() => {
    function updateOffset() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setSlidesOffset(rect.left);
      }
    }
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section
      className={cn(
        "bg-[#F5F5F7] lg:pt-37.5 md:pt-25 pt-20 lg:mt-37.5 md:mt-25 mt-20",
        className,
      )}
    >
      <div className="container">
        <div ref={containerRef}></div>
        <Title>
          Varför Ornexa är det bästa
{" "}
          <span className="block">stället att köpa dina teknikprodukter?
</span>{" "}
        </Title>
      </div>
      <div className="pt-[50px] relative">
        <Swiper
          spaceBetween={30}
          slidesOffsetBefore={slidesOffset}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.7,
            },
            1280: {
              slidesPerView: 3.5,
            },
            1536: {
              slidesPerView: 4.35,
            },
          }}
          navigation={{
            nextEl: ".next-nav-feature",
            prevEl: ".prev-nav-feature",
          }}
          modules={[Navigation]}
        >
          {companyFeaturesData.map(({ description, icon, id, title }) => (
            <SwiperSlide key={id}>
              <div
                className={cn(
                  "bg-card rounded-[30px] px-[25px] pt-[30px] pb-[46px] h-[335px]",
                  cardClassName,
                )}
              >
                <Image width={56} height={56} src={icon} alt="img" />
                <Title
                  asChild
                  size="28"
                  className="font-extralight text-light-dark mt-5"
                >
                  <h6>{title}</h6>
                </Title>
                <p className="md:leading-7 md:text-lg text-light-dark mt-5">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container flex items-center justify-end gap-[15px] mt-10">
          <div className="prev-nav-feature w-12 h-12 lg:w-14 lg:h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronLeft className="max-lg:size-6" />
          </div>
          <div className="next-nav-feature w-12 h-12 lg:w-14 lg:h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronRight className="max-lg:size-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyFeaturesSlider;
