import React from "react";
import Title from "../ui/title";
import Image from "next/image";
import {
  BoltOutlineIcon,
  CupIcon,
  LeafIcon,
  ShieldCheckIcon,
} from "@/lib/icons";

const differentcesData = [
  {
    icon: <BoltOutlineIcon />,
    title: "Noggrant utvalda produkter",
    description:
      "Vi fokuserar på elektronik och tillbehör som är relevanta, praktiska och enkla att jämföra.",
    img: "/images/differences/img-1.png",
  },
  {
    icon: <CupIcon />,
    title: "Tydlig köpupplevelse",
    description:
      "Vår butik är byggd för enkel navigering, tydliga kategorier och snabb väg till rätt produkt.",
    img: "/images/differences/img-2.png",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Fokus på kunden",
    description:
      "Vi vill göra det enkelt att hitta rätt mobil, smartklocka, hörlurar eller tillbehör efter behov.",
    img: "/images/differences/img-3.png",
  },
  {
    icon: <LeafIcon />,
    title: "Modern elektronik",
    description:
      "Ornexa samlar produkter för vardag, arbete, träning och en mer uppkopplad livsstil.",
    img: "/images/differences/img-4.png",
  },
];

const OurDifferences = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="text-center">
          <Title size="60" className="tracking-[-1.5px]">
             Därför väljer kunder Ornexa
          </Title>
          <p className="text-xl text-light-dark mt-4 max-w-[722px] mx-auto">
            Vi kombinerar tydliga produktval, modern elektronik och en smidig köpupplevelse
  för dig som vill köpa mobiler, smartklockor, hörlurar och tillbehör på ett enkelt sätt.

          </p>
        </div>
        <div className="mt-15 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5">
          {differentcesData.map((item, index) => (
            <div key={index} className="bg-[#F3F5F8] rounded-3xl py-7.5 px-6">
              <div className="size-15 rounded-lg bg-light-gray text-blue flex justify-center items-center">
                {item.icon}
              </div>
              <div className="mt-4">
                <h3 className="font-bold md:text-2xl text-lg">{item.title}</h3>
                <p className="text-light-dark mt-2 leading-[170%]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6">
                <Image
                  width={327}
                  height={250}
                  src={item.img}
                  sizes="100vw"
                  alt="img"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDifferences;
