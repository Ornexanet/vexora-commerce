import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

const galleryImages = [
  {
    id: 0,
    src: "/images/product-details-two/gallery-img-1.png",
    title: "",
    description: "",
    size: "large",
  },
  {
    id: 1,
    src: "/images/product-details-two/gallery-img-2.png",
    title: "Your Health Journey",
    description:
      "Move to better health Active score, a key tool that quantifies your physical activity based on heart rate data from the last 7 days. ",
    size: "small",
  },
  {
    id: 2,
    src: "/images/product-details-two/gallery-img-3.png",
    title: "Smart  Sleep Algorithm",
    description:
      "Receive precise sleep data thanks to the upgraded smart sleep technology. Track sleep stages as well as daytime napping",
    size: "small",
  },
  {
    id: 3,
    src: "/images/product-details-two/gallery-img-4.png",
    title: "Menstrual Cycle Tracking",
    description:
      "Manage your menstrual cycle with smart prompts and predictions gaining key insights into your health.",
    size: "small",
  },
  {
    id: 4,
    src: "/images/product-details-two/gallery-img-5.png",
    title: "Wellness Companion",
    description:
      "Prioritise what matters. Keep an eye on your stress and health with 24/7 heart rate and blood oxygen saturation level monitoring.",
    size: "small",
  },
];
const ProductImageGallery = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <Title className="text-center">A Wonderful All-Rounder</Title>
        <div className="mt-12.5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7.5">
          {galleryImages.map((item) => {
            if (item.size === "large") {
              return (
                <div
                  key={item.id}
                  className="col-span-1 md:col-span-2 lg:col-span-4"
                >
                  <Image
                    width={1600}
                    height={650}
                    sizes="100vw"
                    src={item.src}
                    alt="img"
                    className="w-full"
                  />
                </div>
              );
            } else {
              return (
                <div key={item.id}>
                  <Image
                    width={377}
                    height={457}
                    sizes="100vw"
                    src={item.src}
                    alt="img"
                    className="w-full"
                  />
                  <div className="mt-8 px-[15px]">
                    <Title asChild size="28" className="font-bold">
                      <strong>{item.title}</strong>
                    </Title>
                    <p className="mt-[5px] text-lg text-light-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductImageGallery;
