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
                A singular home theatre experience
              </Title>
              <p className="text-[22px] leading-[160%] text-light-dark mt-7.5">
                Instantly swap TV audio from Sonos Arc Ultra, Arc, Beam, or Ray
                to Sonos Ace when you don’t want to disturb others, and feel
                enveloped in exhilarating surround sound and spatial audio.
              </p>
            </div>
            <div className="grid xl:grid-cols-2 gap-6">
              <div className="flex gap-2">
                <span className="text-[#1279F2]">
                  <CheckCircle />
                </span>
                <p className="font-medium text-lg">
                  Listen for 26 hours, thanks to a massive 8800 mAh battery.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-[#1279F2]">
                  <CheckCircle />
                </span>
                <p className="font-medium text-lg">
                  With IP67-rated water and dust resistance, feel secure.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="mt-12.5 rounded-full gap-[15px] bg-light-gray text-foreground hover:text-primary-foreground"
            >
              <Link href={"/product-details"}>
                Shop now
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
              src={"/images/home-2/features-product.png"}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProductFour;
