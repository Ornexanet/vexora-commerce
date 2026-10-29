import Title from "@/components/ui/title";
import Image from "next/image";
import React from "react";

const galleryImages = [
  {
    id: 0,
    src: "/images-optimized/product-details-two/gallery-img-1.webp",
    title: "",
    description: "",
    size: "large",
  },
  {
    id: 1,
    src: "/images-optimized/product-details-two/gallery-img-2.webp",
    title: "Din väg till bättre hälsa",
    description:
      "Ta steg mot bättre hälsa med aktivitetspoäng, ett viktigt verktyg som mäter din fysiska aktivitet utifrån pulsdata från de senaste sju dagarna.",
    size: "small",
  },
  {
    id: 2,
    src: "/images-optimized/product-details-two/gallery-img-3.webp",
    title: "Smart sömnalgoritm",
    description:
      "Få precisa sömndata med den förbättrade smarta sömntekniken. Följ sömnstadier och tupplurar under dagen",
    size: "small",
  },
  {
    id: 3,
    src: "/images-optimized/product-details-two/gallery-img-4.webp",
    title: "Menscykelspårning",
    description:
      "Följ din menscykel med smarta påminnelser och prognoser som ger värdefulla insikter om din hälsa.",
    size: "small",
  },
  {
    id: 4,
    src: "/images-optimized/product-details-two/gallery-img-5.webp",
    title: "Din hälsopartner",
    description:
      "Prioritera det som är viktigt. Följ din stress och hälsa med mätning av puls och syremättnad dygnet runt.",
    size: "small",
  },
];
const ProductImageGallery = () => {
  return (
    <section className="mt-25">
      <div className="container">
        <Title className="text-center">En mångsidig följeslagare</Title>
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
                    alt="Bild"
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
                    alt="Bild"
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
