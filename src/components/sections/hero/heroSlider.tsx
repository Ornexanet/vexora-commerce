"use client";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import {
  BatteryCharging,
  Bluetooth,
  Map,
  SoundDecibel,
  VideoRecorder,
} from "@/lib/icons";
import { heroData } from "@/mockData/heroData";
import Link from "next/link";
import { JSX, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

function IconsFinder(iconName: string) {
  // find icon by name
  const icons: Record<string, JSX.Element> = {
    videorecorder: <VideoRecorder />,
    batterycharging: <BatteryCharging />,
    map: <Map />,
    sounddecibel: <SoundDecibel />,
    bluetooth: <Bluetooth />,
  };
  return icons[iconName.toLowerCase()];
}

const HeroSlider = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section>
      <Swiper  speed={1000}>
        {heroData.map(
          ({ backgroundImage, image, description, features, id, title }) => {
            return (
              <SwiperSlide key={id} className="relative overflow-hidden">
                <div
                  className="bg-no-repeat bg-cover bg-center lg:pt-[180px] lg:pb-[176px] sm:pt-20 sm:pb-20 pt-10 pb-10"
                  style={{
                    backgroundImage: `url("${backgroundImage}")`,
                  }}
                >
                  <div className="sm:absolute top-1/2 sm:-translate-y-1/2 right-0 max-sm:mb-3 max-xl:max-w-[550px]">
                    <Image
                      width={700}
                      height={650}
                      src={image}
                      sizes="100vw"
                      alt={title}
                      priority
                    />
                  </div>
                  <div className="container relative z-10">
                    <div className="max-w-[834px]">
                      <h1 className="font-extrabold text-[clamp(3.4375rem,1.7137rem+7.6613vw,9.375rem)] leading-[1] mb-7 xl:-mt-5">
                        {title}
                      </h1>
                      <Title
                        asChild
                        size="42"
                        className="lg:max-w-[767px] max-w-[500px]"
                      >
                        <p>{description}</p>
                      </Title>
                      <div className="mt-[30px] flex lg:flex-row flex-col lg:items-center gap-x-10 gap-y-4">
                        {features.map((feature) => (
                          <div
                            key={feature.id}
                            className="flex items-center gap-2.5"
                          >
                            <span className="text-[#1279F2]">
                              {IconsFinder(feature.icon)}
                            </span>
                            <p className="text-lg">{feature.name}</p>
                          </div>
                        ))}
                      </div>
                      <div className="lg:mt-[70px] mt-10 flex items-center max-[447px]:flex-col flex-row gap-x-9 gap-y-5">
                        <Button className="max-[447px]:w-full w-auto">
                          <Link href={"/product-details"}>Köp nu</Link>
                        </Button>
                        <Button
                          className="max-[447px]:w-full w-auto"
                          variant={"outline"}
                          onClick={() => setOpen(true)}
                        >
                          Se produktvideo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 lg:-bottom-[67px] md:-bottom-10 -bottom-3 z-[1]">
                    <h2
                      className="text-[clamp(4.6875rem,0.6048rem+18.1452vw,18.75rem)] font-extrabold whitespace-nowrap overflow-hidden"
                      style={{
                        WebkitTextStrokeWidth: "1.5px",
                        WebkitTextStrokeColor: "rgba(47, 53, 61, 0.15)",
                        color: "rgba(255, 255, 255, 0.01)",
                      }}
                    >
                      {title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          },
        )}
      </Swiper>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none bg-transparent shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Produktvideo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={isOpen?
                `https://www.youtube.com/embed/TKnufs85hXk?autoplay=1` : ""}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSlider;
