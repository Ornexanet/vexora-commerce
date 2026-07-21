"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

import {
  BatteryCharging,
  Bluetooth,
  Map,
  SoundDecibel,
  VideoRecorder,
} from "@/lib/icons";

import { heroData, heroDataType } from "@/mockData/heroData";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function IconsFinder(iconName: string): JSX.Element | null {
  const icons: Record<string, JSX.Element> = {
    videorecorder: <VideoRecorder />,
    batterycharging: <BatteryCharging />,
    map: <Map />,
    sounddecibel: <SoundDecibel />,
    bluetooth: <Bluetooth />,
  };

  return icons[iconName.toLowerCase()] ?? null;
}

const HeroSlider = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");

  const openVideo = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setOpen(true);
  };

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        speed={900}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full"
      >
        {heroData.map(
          ({
            backgroundImage,
            image,
            description,
            features,
            id,
            productId,
            title,
            videoUrl,
          }: heroDataType) => (
            <SwiperSlide key={id} className="relative overflow-hidden">
              <div
                className="
                  relative
                  min-h-[650px]
                  overflow-hidden
                  bg-cover
                  bg-center
                  bg-no-repeat
                  px-0
                  pb-10
                  pt-6
                  sm:min-h-[680px]
                  sm:pb-12
                  sm:pt-10
                  md:min-h-[620px]
                  md:py-16
                  lg:min-h-[720px]
                  lg:py-[110px]
                  xl:min-h-[780px]
                  xl:pb-[150px]
                  xl:pt-[150px]
                "
                style={{
                  backgroundImage: `url("${backgroundImage}")`,
                }}
              >
                {/* Product image */}
                <div
                  className="
                    relative
                    z-[2]
                    mx-auto
                    mb-3
                    flex
                    h-[245px]
                    w-full
                    max-w-[330px]
                    items-center
                    justify-center
                    sm:h-[270px]
                    sm:max-w-[380px]
                    md:absolute
                    md:right-[-20px]
                    md:top-1/2
                    md:mb-0
                    md:h-auto
                    md:max-w-[46%]
                    md:-translate-y-1/2
                    lg:right-0
                    lg:max-w-[50%]
                    xl:max-w-[700px]
                  "
                >
                  <Image
                    width={700}
                    height={650}
                    src={image}
                    sizes="
                      (max-width: 639px) 82vw,
                      (max-width: 767px) 60vw,
                      (max-width: 1023px) 46vw,
                      700px
                    "
                    alt={title}
                    priority={id === heroData[0]?.id}
                    className="
                      h-full
                      w-auto
                      max-w-full
                      object-contain
                      md:h-auto
                      md:w-full
                    "
                  />
                </div>

                {/* Content */}
                <div className="container relative z-10">
                  <div
                    className="
                      mx-auto
                      max-w-[650px]
                      text-left
                      md:mx-0
                      md:max-w-[52%]
                      lg:max-w-[58%]
                      xl:max-w-[760px]
                    "
                  >
                    <h1
                      className="
                        mb-3
                        text-[42px]
                        font-extrabold
                        leading-[0.95]
                        tracking-[-0.04em]
                        sm:text-[50px]
                        md:text-[54px]
                        lg:mb-5
                        lg:text-[72px]
                        xl:text-[96px]
                        2xl:text-[120px]
                      "
                    >
                      {title}
                    </h1>

                    <Title
                      asChild
                      size="42"
                      className="
                        max-w-[620px]
                        text-[20px]
                        font-normal
                        leading-[1.4]
                        sm:text-[23px]
                        md:text-[22px]
                        lg:text-[28px]
                        xl:text-[34px]
                      "
                    >
                      <p>{description}</p>
                    </Title>

                    {/* Features */}
                    <div
                      className="
                        mt-5
                        flex
                        flex-col
                        gap-3
                        sm:mt-6
                        sm:gap-3.5
                        lg:mt-8
                        lg:flex-row
                        lg:flex-wrap
                        lg:items-center
                        lg:gap-x-8
                        lg:gap-y-4
                      "
                    >
                      {features.map((feature) => (
                        <div
                          key={feature.id}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className="
                              flex
                              min-h-6
                              min-w-6
                              items-center
                              justify-center
                              text-[#1279F2]
                            "
                          >
                            {IconsFinder(feature.icon)}
                          </span>

                          <p
                            className="
                              text-[17px]
                              leading-tight
                              sm:text-lg
                              lg:text-[19px]
                            "
                          >
                            {feature.name}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div
                      className="
                        mt-7
                        flex
                        w-full
                        flex-col
                        gap-3
                        sm:mt-8
                        sm:w-auto
                        sm:flex-row
                        sm:gap-4
                        lg:mt-12
                        lg:gap-6
                      "
                    >
                      <Button
                        asChild
                        className="
                          h-14
                          w-full
                          rounded-xl
                          px-8
                          text-lg
                          font-semibold
                          sm:w-auto
                          sm:min-w-[170px]
                          lg:h-16
                          lg:min-w-[190px]
                        "
                      >
                        <Link href={`/product-details/${productId}`}>
                          Köp nu
                        </Link>
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => openVideo(videoUrl)}
                        className="
                          h-14
                          w-full
                          rounded-xl
                          border-2
                          px-8
                          text-lg
                          font-semibold
                          sm:w-auto
                          sm:min-w-[190px]
                          lg:h-16
                          lg:min-w-[220px]
                        "
                      >
                        Se produktvideo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Background outlined title */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-2
                    left-0
                    z-[1]
                    hidden
                    w-full
                    overflow-hidden
                    md:block
                    lg:-bottom-[40px]
                    xl:-bottom-[65px]
                  "
                  aria-hidden="true"
                >
                  <p
                    className="
                      whitespace-nowrap
                      text-[clamp(7rem,17vw,18.75rem)]
                      font-extrabold
                      leading-none
                    "
                    style={{
                      WebkitTextStrokeWidth: "1.5px",
                      WebkitTextStrokeColor: "rgba(47, 53, 61, 0.15)",
                      color: "rgba(255, 255, 255, 0.01)",
                    }}
                  >
                    {title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setOpen(open);

          if (!open) {
            setActiveVideoUrl("");
          }
        }}
      >
        <DialogContent
          className="
            w-[calc(100%-24px)]
            max-w-[900px]
            overflow-hidden
            border-none
            bg-black
            p-0
            shadow-2xl
            sm:w-full
          "
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Produktvideo</DialogTitle>
          </DialogHeader>

          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={isOpen ? activeVideoUrl : ""}
              title="Produktvideo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSlider;
