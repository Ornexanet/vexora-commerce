"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "@/lib/icons";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const CompatibleAccessories = () => {
  return (
    <div className="mt-11 ">
      <div className="border border-[#E0E4E9] rounded-[15px] px-[15px] py-6 relative">
        <span className="text-lg font-bold text-light-dark px-2 ml-2 absolute -top-4 bg-background">
          Compatible Accessories
        </span>
        <div className="flex items-center gap-2.5 px-2.5 absolute right-5 -top-4 bg-background">
          <button className="prev-accessories-btn size-7.5 rounded-full bg-light-gray flex items-center justify-center">
            <ChevronLeft className="text-light-dark size-4" />
          </button>
          <button className="next-accessories-btn size-7.5 rounded-full bg-light-gray flex items-center justify-center">
            <ChevronRight className="text-light-dark size-4" />
          </button>
        </div>
        <Swiper
          navigation={{
            nextEl: ".next-accessories-btn",
            prevEl: ".prev-accessories-btn",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  width={90}
                  height={90}
                  src={"/images/product-details/accessories-img-1.png"}
                  alt="img"
                  className="rounded-xl"
                />
                <div>
                  <strong>Ear cushions</strong>
                  <small className="text-light-dark block">$59.99</small>
                </div>
              </div>
              <Button
                variant={"outline"}
                className="border border-light-dark text-light-dark bg-[#F5F5F7] h-11 w-[106px]"
              >
                <Plus /> Add
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  width={90}
                  height={90}
                  src={"/images/product-details/accessories-img-1.png"}
                  alt="img"
                  className="rounded-xl"
                />
                <div>
                  <strong>Ear cushions</strong>
                  <small className="text-light-dark block">$59.99</small>
                </div>
              </div>
              <Button
                variant={"outline"}
                className="border border-light-dark text-light-dark bg-[#F5F5F7] h-11 w-[106px]"
              >
                <Plus /> Add
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Image
                  width={90}
                  height={90}
                  src={"/images/product-details/accessories-img-1.png"}
                  alt="img"
                  className="rounded-xl"
                />
                <div>
                  <strong>Ear cushions</strong>
                  <small className="text-light-dark block">$59.99</small>
                </div>
              </div>
              <Button
                variant={"outline"}
                className="border border-light-dark text-light-dark bg-[#F5F5F7] h-11 w-[106px]"
              >
                <Plus /> Add
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CompatibleAccessories;
