import Image from "next/image";
import Link from "next/link";
import Title from "../ui/title";

const Ads = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <Title className="">
          Upplev nästa generation av smarta klockor
 <span className="block"></span>
        </Title>
        <div className="flex lg:flex-row flex-col mt-[50px]">
          <div className="lg:max-w-[483px] bg-[#F4F6F8] rounded-tl-[30px] rounded-bl-[30px] max-lg:rounded-[30px] px-5 pb-5 overflow-hidden">
            <Link href={"/product-details"}>
              <Image
                width={443}
                height={534}
                sizes="100vw"
                src={"/images/smarta-klockor/galaxy-watch-ultra-1.webp"}
                alt="img"
                className="hover:scale-105 transition-all duration-500 mx-auto"
              />
            </Link>
            <Title
              size="28"
              className="text-center hover:text-blue transition-all duration-500"
            >
              <Link href={"/product-details/18"}>
                Kraftfull prestanda
                för alla utmaningar
              </Link>
            </Title>
          </div>
          <div>
            <Image
              width={1117}
              height={658}
              sizes="100vw"
              src={"/images/ads/bg.png"}
              alt="img"
              className="rounded-tr-[30px] rounded-br-[30px] max-lg:rounded-[30px] lg:h-[clamp(27.5rem,32.813vw+6.5rem,39.313rem)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
