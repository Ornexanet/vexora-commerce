import Image from "next/image";
import Link from "next/link";

const Pointer = () => {
  return (
    <div className="w-[61px] h-[61px] rounded-full border border-[rgba(255,255,255,0.33)] flex justify-center items-center cursor-pointer">
      <div className="w-[45px] h-[45px] rounded-full  bg-[rgba(255,255,255,0.30)] flex justify-center items-center">
        <div className="w-[25px] h-[25px] rounded-full bg-[rgba(255,255,255,0.70)]"></div>
      </div>
    </div>
  );
};

const FeaturesProductTwo = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div
          className="bg-cover sm:bg-center bg-[55%] bg-no-repeat rounded-[30px] pb-10 sm:pt-[313px] pt-50 relative"
          style={{ backgroundImage: `url("/images/features/apple-watch-ultra3 (2).webp")` }}
        >
          <div className="h-[358px]">
            <div className="flex absolute xl:right-[33%] lg:right-[23%] right-[13%]">
              <div className="max-w-[242px] bg-background rounded-lg pt-7 pb-5 px-5 shadow-[0_8px_40px_0_rgba(1,22,36,0.08)]">
                <Link href={"/product-details"} className="overflow-hidden">
                  <Image
                    width={196}
                    height={222}
                    sizes="100vw"
                    src={"/images/smarta-klockor/apple-watch-ultra3.webp"}
                    alt="img"
                    className="hover:scale-105 transition-all duration-500"
                  />
                </Link>
                <div className="pt-7">
                  <Link
                    href={"/product-details/16"}
                    className="font-bold text-xl leading-normal hover:text-blue transition-all duration-500"
                  >
                    WATCH PRO 2
                  </Link>
                  <p className="text-lg leading-normal mt-2">9990</p> kr 
                </div>
              </div>
              <div className="mt-16 relative">
                <div className="absolute md:-top-[10%] md:-right-[10%] -top-[2%] -right-[26%]">
                  <Pointer />
                </div>
                <div>
                  <Lile className="max-md:w-[120px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProductTwo;

function Lile({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={343}
      height={105}
      viewBox="0 0 343 105"
      fill="none"
      className={className}
    >
      <path d="M342 1L242.71 104H0" stroke="white" />
    </svg>
  );
}
