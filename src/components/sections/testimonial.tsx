import { testimonialData, testimonialType } from "@/mockData/testimonialData";
import Image from "next/image";
import Rating from "../ui/rating";
import Title from "../ui/title";

const Card = ({ item }: { item: testimonialType }) => {
  return (
    <div className="bg-card rounded-[15px] p-7.5 space-y-5">
      <div className="bg-[#F5F5F7] rounded-[30px] pl-[15px] pr-[14px] pt-[11px] pb-[9px] inline-flex items-center gap-2.5">
        <Rating star={item.rating} />
        <span className="font-bold md:text-lg md:leading-none">
          {String(item.rating).padEnd(3, ".0")}
        </span>
      </div>
      <p className="text-light-dark md:leading-7 md:text-lg">{item.review}</p>
      <div className="flex items-center gap-[15px]">
        <Image
          width={50}
          height={50}
          src={item.image}
          alt="img"
          className="rounded-full"
        />
        <div>
          <strong className="md:text-lg md:leading-7">{item.name}</strong>
          <p className="text-light-dark leading-[25px]">Travel Vlogger</p>
        </div>
      </div>
    </div>
  );
};
const Testimonial = () => {
  return (
    <section className="bg-[#F5F5F7] lg:pt-37.5 md:pt-25 pt-20 lg:pb-37.5 md:pb-25 pb-20">
      <div className="container">
        <Title className="max-w-[921px]">
          Hear Directly from Our Community of Users
        </Title>
        <div
          className={`mt-9 relative 
           after:z-10 after:absolute after:top-0 after:left-0 after:w-full after:max-h-[215px] after:h-full after:bg-[linear-gradient(180deg,_#F5F5F7_0%,_rgba(245,245,247,0.00)_100%)]
           before:z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:max-h-[205px] before:h-full before:-rotate-180 before:bg-[linear-gradient(180deg,_#F5F5F7_0%,_rgba(245,245,247,0.00)_100%)]
            `}
        >
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px] max-h-[1000px] overflow-hidden">
            <div
              className="scroll-area space-y-[30px]"
              data-dir="top"
              data-speed="fast"
            >
              {testimonialData.slice(0, 8).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
            <div className="sm:block hidden">
              <div
                className="scroll-area space-y-[30px]"
                data-dir="top"
                data-speed="fast"
              >
                {testimonialData.slice(2, 10).map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="xl:block hidden">
              <div
                className="scroll-area space-y-[30px]"
                data-dir="top"
                data-speed="fast"
              >
                {testimonialData.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
