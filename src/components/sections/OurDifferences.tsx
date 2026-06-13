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
    title: "Innovation at the Core",
    description:
      "TaskHub is built to work seamlessly on mobile devices, ensuring you can connected.",
    img: "/images/differences/img-1.png",
  },
  {
    icon: <CupIcon />,
    title: "Customer-First Experience",
    description:
      "TaskHub is built to work seamlessly on mobile devices, ensuring you can connected.",
    img: "/images/differences/img-2.png",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Integrity & Transparency",
    description:
      "TaskHub is built to work seamlessly on mobile devices, ensuring you can connected.",
    img: "/images/differences/img-3.png",
  },
  {
    icon: <LeafIcon />,
    title: "Sustainable Tech Choices",
    description:
      "TaskHub is built to work seamlessly on mobile devices, ensuring you can connected.",
    img: "/images/differences/img-4.png",
  },
];

const OurDifferences = () => {
  return (
    <section className="lg:mt-37.5 md:mt-25 mt-20">
      <div className="container">
        <div className="text-center">
          <Title size="60" className="tracking-[-1.5px]">
            What makes us different
          </Title>
          <p className="text-xl text-light-dark mt-4 max-w-[722px] mx-auto">
            Simplify project planning, streamline collaboration, and boost
            productivity all with TaskHub task management solution
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
