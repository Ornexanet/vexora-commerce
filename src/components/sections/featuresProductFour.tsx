import { CheckCircle } from "@/lib/icons";
import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";
import Link from "next/link";

const FeaturesProductFour = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col-reverse gap-y-10 justify-between items-center gap-x-8">
          <div className="xl:max-w-[649px] lg:max-w-[500px]">
            <div className="xl:mb-[192px] mb-14">
              <Title className="font-bold leading-[120%]">
                En unik hemmabioupplevelse
              </Title>
              <p className="text-[22px] leading-[160%] text-light-dark mt-7.5">
                Flytta direkt över tv-ljudet från Sonos Arc Ultra, Arc, Beam eller Ray till Sonos Ace när du inte vill störa andra, och omslut dig med medryckande surroundljud och rumsligt ljud.
              </p>
            </div>
            <div className="grid xl:grid-cols-2 gap-6">
              <div className="flex gap-2">
                <span className="text-[#1279F2]">
                  <CheckCircle />
                </span>
                <p className="font-medium text-lg">
                  Lyssna i 26 timmar tack vare ett kraftfullt batteri på 8800 mAh.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-[#1279F2]">
                  <CheckCircle />
                </span>
                <p className="font-medium text-lg">
                  Känn dig trygg med vatten- och dammtålighet enligt IP67.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="mt-12.5 rounded-full gap-[15px] bg-light-gray text-foreground hover:text-primary-foreground"
            >
              <Link href={"/product-details"}>
                Handla nu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 12L16 7M21 12L16 17M21 12H3"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Button>
          </div>
          <div>
            <Image
              width={784}
              height={912}
              sizes="100vw"
              src={"/images-optimized/home-2/features-product.webp"}
              alt="Bild"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProductFour;
