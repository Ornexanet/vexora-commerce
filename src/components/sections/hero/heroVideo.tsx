"use client";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { BatteryCharging, Drop, Sun } from "@/lib/icons";
import { PauseIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const DEFAULT_PLAY = true;

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(DEFAULT_PLAY);

  // Toggle play/pause when state changes
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isPlaying) {
      const playPromise = v.play();
      if (
        playPromise &&
        typeof (playPromise as Promise<void>).catch === "function"
      ) {
        (playPromise as Promise<void>).catch(() => setIsPlaying(false));
      }
    } else {
      v.pause();
    }
  }, [isPlaying]);

  return (
    <section className="sm:px-7.5 px-4">
      <div className="rounded-[30px] bg-[#ECF2F9] lg:pt-[199px] lg:pb-[213px] md:pt-20 md:pb-20 pt-15 pb-15 w-full overflow-hidden px-3 relative">
        <div>
          <video
            ref={videoRef}
            autoPlay={DEFAULT_PLAY}
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover "
          >
            <source src="/images/home-2/watch-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
          <button
            aria-label={isPlaying ? "pause video" : "play video"}
            onClick={() => setIsPlaying((s) => !s)}
            className=" size-10 rounded-full border border-white right-5 bottom-5 absolute flex justify-center items-center text-white bg-black/20 p-3 z-20"
          >
            {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
          </button>
        </div>
        <div className="flex items-center justify-center flex-col text-center relative z-10 text-white">
          <h1 className="font-extrabold text-[clamp(3rem,1.1492rem+8.2258vw,9.375rem)] leading-[0.75]">
            Watch 5 Pro
          </h1>
          <Title
            asChild
            size="42"
            className="mt-10 font-extralight leading-[1.27]"
          >
            <p>Pro-Level Outdoor Sports | Superior hardness and durability</p>
          </Title>
          <div className="mt-10 flex items-center gap-x-7.5 gap-y-4 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="text-[#1279F2]">
                <Sun />
              </span>
              <p className="text-lg leading-[1.28]">3000 nits Brightness</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#1279F2]">
                <BatteryCharging />
              </span>
              <p className="text-lg leading-[1.28]">
                Up to 10-Day Battery Life
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#1279F2]">
                <Drop />
              </span>
              <p className="text-lg leading-[1.28]">
                IP6X Water & Dustproof Rating
              </p>
            </div>
          </div>
          <div className="lg:mt-15 mt-10 flex items-center max-[447px]:flex-col flex-row gap-x-9 gap-y-5 w-full justify-center">
            <Button asChild className="max-[447px]:w-full w-auto">
              <Link href={"/product-details"}>Buy Watch 5 Pro</Link>
            </Button>
            <Button
            asChild
              className="max-[447px]:w-full w-auto border-white"
              variant={"outline"}
            >
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
