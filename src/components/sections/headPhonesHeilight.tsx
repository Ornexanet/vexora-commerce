import { products } from "@/mockData/products";
import Image from "next/image";
import Card from "../ui/card";
import Title from "../ui/title";

const HeadPhonesHeilight = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-y-10 xl:gap-x-[60px] gap-x-10">
          <div className="max-w-[755px] w-full shrink lg:sticky top-0 self-start">
            <Image
              width={755}
              height={1016}
              sizes="100vw"
              src={"/images/headphones/bg.png"}
              alt="img"
            />
          </div>
          <div className="w-full grow">
            <Title>Music on the GO</Title>
            <p className="text-lg leading-7 mt-[18px] max-w-[622px]">
              Get really close to the music with a pair of headphones. Whatever
              you are into in-ears, over-ears or when you need the world to go
              on mute.
            </p>
            <div className="mt-12.5 grid xl:grid-cols-3 grid-cols-2 sm:gap-x-7.5 gap-x-5 gap-y-12.5">
              {products.headphonesData.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  imgContainer="shadow-[0_8px_40px_0_rgba(1,22,36,0.08)] sm:h-[300px]"
                  imgWrapper="px-3 py-3"
                  ImgHeight={235}
                  ImgWidth={214}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadPhonesHeilight;
