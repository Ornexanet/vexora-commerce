"use client";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { products } from "@/mockData/products";
import { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../ui/card";

interface Props {
  category?: string;
}

const MegaMenu = ({ category = "all" }: Props) => {
  const removeSpace = category.replace(" ", "");
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const filteredProducts = products.bestProductsData.filter((product) => {
    if (category === "all") return true;
    return (
      product.filter?.toLocaleLowerCase().includes(removeSpace) ||
      product.categories.some((cat) =>
        cat.toLocaleLowerCase().includes(removeSpace)
      )
    );
  });

  return (
    <div className="bg-background rounded-xl shadow-[0_7px_18px_0_rgba(0,0,0,0.09)] border border-[#F1F1F4]">
      <div className="overflow-hidden">
        <div className="p-[30px] pb-5 overflow-hidden relative">
          <Swiper
            breakpoints={{
              1600: {
                slidesPerView: 5,
              },
              1281: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 3.5,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2.5,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={24}
            navigation={{
              nextEl: ".next-nav-category",
              prevEl: ".prev-nav-category",
            }}
            modules={[Navigation]}
            onSlideChange={handleSlideChange}
            onInit={handleSlideChange}
            observer={true}
            observeParents={true}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Card product={product} imgContainer="sm:h-[370px]" imgWrapper="p-3"/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            {/* Previous Button - Hidden when at beginning */}
            <button
              className={`prev-nav-category absolute z-50 left-[7px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex justify-center items-center bg-background border border-light-gray transition-opacity duration-300 ${
                isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ChevronLeft />
            </button>

            {/* Next Button - Hidden when at end */}
            <button
              className={`next-nav-category absolute z-50 right-[7px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex justify-center items-center bg-background border border-light-gray transition-opacity duration-300 ${
                isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
