"use client";
import Card from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { products } from "@/mockData/products";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop
        navigation={{
          nextEl: ".next-nav-hot-deal",
          prevEl: ".prev-nav-hot-deal",
        }}
        modules={[Navigation]}
      >
        {products.bestProductsData.map((product) => (
          <SwiperSlide key={product.id}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-8 gap-5">
        <div className="lg:absolute z-40 2xl:-left-16 left-0 top-1/2 -translate-y-1/2 prev-nav-hot-deal size-12 lg:size-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
          <ChevronLeft className="max-lg:size-6" />
        </div>
        <div className="lg:absolute z-40 2xl:-right-16 right-0 top-1/2 -translate-y-1/2 next-nav-hot-deal size-12 lg:size-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
          <ChevronRight className="max-lg:size-6" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
