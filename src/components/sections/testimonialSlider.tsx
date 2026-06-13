"use client";
import { Quotation } from "@/lib/icons";
import { testimonialData } from "@/mockData/testimonialData";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../ui/title";
import { Autoplay } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="text-center mb-12.5">
          <Title className="font-bold tracking-[-1.5px] leading-[120%]">
            Words That Inspire Us
          </Title>
          <p className="mt-4 text-lg lg:text-xl leading-[160%] max-w-[626px] mx-auto text-light-dark">
            We’re proud to collaborate with visionary brands that shape the
            future of technology
          </p>
        </div>
        <div>
          <Swiper
            autoplay={{ delay: 4000 }}
            speed={1000}
            loop
            modules={[Autoplay]}
          >
            {testimonialData.map(({ id, image, name, position, review }) => (
              <SwiperSlide key={id}>
                <div className="rounded-[20px] bg-[#F3F5F8] lg:py-25 md:py-16 py-10 px-4 relative z-10">
                  <div className="max-w-[950px] mx-auto text-center relative">
                    <span className="text-[#B0B5BB] absolute -left-12 -top-10 -z-10">
                      <Quotation />
                    </span>
                    <span className="text-[#B0B5BB] absolute -right-12 -bottom-10 rotate-180 -z-10">
                      <Quotation />
                    </span>
                    <p className="text-lg md:text-2xl lg:text-[32px] leading-[150%]">
                      {review}
                    </p>
                  </div>
                  <div className="mt-10 flex justify-center items-center gap-5">
                    <Image
                      width={60}
                      height={60}
                      sizes="100vw"
                      src={image}
                      alt="avatar"
                      className="rounded-full w-15 h-15"
                    />
                    <div>
                      <p className="font-semibold text-lg lg:text-xl leading-[160%]">
                        {name}
                      </p>
                      <small className="leading-[170%]">{position}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
