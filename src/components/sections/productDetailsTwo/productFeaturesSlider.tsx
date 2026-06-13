"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import Title from "@/components/ui/title";

const productFeatures = [
  {
    id: 1,
    icon: "/images/product-details-two/feature-img-1.png",
    description: "Glance on the go with the larger Actua display.",
  },
  {
    id: 2,
    icon: "/images/product-details-two/feature-img-2.png",
    description: "24 hours of battery with always-on display.",
  },
  {
    id: 3,
    icon: "/images/product-details-two/feature-img-3.png",
    description: "Track run performance and 160+ exercises.",
  },
  {
    id: 4,
    icon: "/images/product-details-two/feature-img-4.png",
    description: "Balance activity and rest with readiness insights.",
  },
  {
    id: 5,
    icon: "/images/product-details-two/feature-img-1.png",
    description: "Glance on the go with the larger Actua display.",
  },
  {
    id: 6,
    icon: "/images/product-details-two/feature-img-2.png",
    description: "24 hours of battery with always-on display.",
  },
  {
    id: 7,
    icon: "/images/product-details-two/feature-img-3.png",
    description: "Track run performance and 160+ exercises.",
  },
  {
    id: 8,
    icon: "/images/product-details-two/feature-img-4.png",
    description: "Balance activity and rest with readiness insights.",
  },
];

const ProductFeaturesSlider = () => {
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
    <div className="mt-23">
      <div className="container">
        <div ref={containerRef}></div>
      </div>
      <div className="relative">
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
          {productFeatures.map(({ description, icon, id }) => (
            <SwiperSlide key={id}>
              <div className="bg-[#F5F5F7] rounded-[30px] px-[25px] pt-[30px] pb-13.5">
                <Image width={50} height={50} src={icon} alt="img" />
                <Title size="28" asChild className="mt-7 font-extralight text-light-dark">
                  <p>{description}</p>
                </Title>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container flex items-center justify-end gap-[15px] mt-10">
          <div className="prev-nav-feature w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronLeft />
          </div>
          <div className="next-nav-feature w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesSlider;
