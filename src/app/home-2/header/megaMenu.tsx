"use client";
import Card from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { categoriesList } from "@/mockData/categoriesList";
import { products } from "@/mockData/products";
import { memo, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MegaMenu = memo(() => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("camera");

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const filteredProducts = products.bestProductsData.filter((product) => {
    if (selectedCategory === "all") return true;
    return (
      product.filter?.toLocaleLowerCase().includes(selectedCategory) ||
      product.categories.some((cat) =>
        cat.toLocaleLowerCase().includes(selectedCategory)
      )
    );
  });
  return (
    <div className="bg-background rounded-xl shadow-[0_7px_18px_0_rgba(0,0,0,0.09)] border border-[#F1F1F4]">
      <div className="flex overflow-hidden">
        <div className="2xl:w-[343px] w-[280px] shrink-0 p-[30px] bg-[#FCFCFC] border-r border-r-[#F1F1F4] rounded-tl-xl rounded-bl-xl">
          <ul className="flex flex-col">
            {categoriesList.map(({ id, label }) => {
              const categoryKey = label.toLocaleLowerCase();
              return (
                <li key={id}>
                  <button
                    className={`w-full max-h-11 flex p-2.5 rounded-sm text-light-dark text-lg leading-6 border transition-all duration-300 ${
                      selectedCategory === categoryKey
                        ? "bg-background border-[#F1F1F4] font-medium text-black"
                        : "hover:font-medium hover:text-black hover:border-[#F1F1F4] hover:bg-background border-transparent"
                    }`}
                    onClick={() => setSelectedCategory(categoryKey.replace(" ", ""))}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="p-[30px] pb-5 overflow-hidden max-w-[1257px] w-full relative">
          <Swiper
            key={selectedCategory}
            breakpoints={{
              1536: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 3,
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
});

MegaMenu.displayName = "MegaMenu";
export default MegaMenu;
