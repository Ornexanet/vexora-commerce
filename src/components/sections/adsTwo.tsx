import { ArrowRight } from "@/lib/icons";
import Image from "next/image";
import { Button } from "../ui/button";
import Title from "../ui/title";
import Link from "next/link";

const AdsTwo = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-7.5">
          <div className="rounded-[30px] relative">
            <Image
              width={785}
              height={550}
              src={"/images/home-2/ads/img-1.png"}
              alt="ads"
              className="w-full h-auto rounded-[30px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black/20 rounded-[30px]">
              <div className=" text-white lg:px-7.5 px-5 xl:py-12.5 lg:py-7 py-5">
                <Title
                  asChild
                  size="42"
                  className="font-bold leading-[1.27] mb-2.5"
                >
                  <h3>Sound That Moves with You</h3>
                </Title>
                <p className="lg:text-[22px] text-lg font-medium leading-[1.27]">
                  Powerful. Compact. Ready for any adventure.
                </p>
                <Button
                  asChild
                  className="rounded-full bg-background text-foreground lg:mt-7.5 mt-5 gap-[15px] hover:text-primary-foreground "
                >
                  <Link href={"/product-details"}>
                    Shop now
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-[30px] relative">
            <Image
              width={785}
              height={550}
              src={"/images/home-2/ads/img-2.png"}
              alt="ads"
              className="w-full h-auto rounded-[30px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-full flex items-end bg-black/20 rounded-[30px]">
              <div className=" text-white lg:px-7.5 px-5 xl:py-12.5 lg:py-7 py-5">
                <Title
                  asChild
                  size="42"
                  className="font-bold leading-[1.27] mb-2.5"
                >
                  <h3>Your Perfect Travel Companion</h3>
                </Title>
                <p className="lg:text-[22px] text-lg font-medium leading-[1.27]">
                  Escape the noise and immerse in your journey—wirelessly.
                </p>
                <Button
                  asChild
                  variant={"outline"}
                  className="rounded-full lg:mt-7.5 mt-5 gap-[15px] border-background hover:border-background hover:bg-background hover:text-foreground"
                >
                  <Link href={"/product-details"}>
                    Shop now
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsTwo;
