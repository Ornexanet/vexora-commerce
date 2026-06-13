"use client";
import Title from "@/components/ui/title";
import { ChevronLeft, ChevronRight } from "@/lib/icons";
import { blogData } from "@/mockData/blogData";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./blogCard";

const BlogSlider = () => {
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
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div ref={containerRef}></div>
        <Title>Tech Talk</Title>
      </div>
      <div className="mt-[50px] relative">
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
              slidesPerView: 3.5,
            },
          }}
          navigation={{
            nextEl: ".next-nav-blog",
            prevEl: ".prev-nav-blog",
          }}
          modules={[Navigation]}
        >
          {blogData.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container flex items-center justify-end gap-[15px] mt-10">
          <div className="prev-nav-blog w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronLeft />
          </div>
          <div className="next-nav-blog w-14 h-14 rounded-full flex justify-center items-center cursor-pointer bg-light-gray text-light-dark hover:bg-blue hover:text-white transition-all duration-500">
            <ChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
