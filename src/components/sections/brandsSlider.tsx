import Image from "next/image";
import Marquee from "react-fast-marquee";
import Title from "../ui/title";

import img_1 from "../../../public/images/home-2/brands/brand-1.png";
import img_2 from "../../../public/images/home-2/brands/brand-2.png";
import img_3 from "../../../public/images/home-2/brands/brand-3.png";
import img_4 from "../../../public/images/home-2/brands/brand-4.png";
import img_5 from "../../../public/images/home-2/brands/brand-5.png";
import img_6 from "../../../public/images/home-2/brands/brand-6.png";
import img_7 from "../../../public/images/home-2/brands/brand-7.png";
const brandsImages = [img_1, img_2, img_3, img_4, img_5, img_6, img_7];

const BrandsSlider = () => {
  return (
    <section className="lg:pt-37.5 md:pt-25 pt-20">
      <div className="container">
        <div className="text-center mb-12.5">
          <Title className="font-bold tracking-[-1.5px] leading-[120%]">
            Brands That Believe in Vexora
          </Title>
          <p className="mt-4 text-lg lg:text-xl leading-[160%] max-w-[626px] mx-auto text-light-dark">
            We’re proud to collaborate with visionary brands that shape the
            future of technology
          </p>
        </div>
      </div>
      <Marquee>
        {brandsImages.map((src, index) => (
          <Image
            key={index}
            width={src.width}
            height={src.height}
            sizes="100vw"
            src={src}
            alt="brand"
            className="xl:mx-24 lg:mx-16 mx-10"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default BrandsSlider;
