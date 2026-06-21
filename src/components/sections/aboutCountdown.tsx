"use client";
import React from "react";
import Title from "../ui/title";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const data = [
  {
    number: 4,
    label: "Produktkategorier <br> i butiken",
    prefix: "+",
  },
  {
    number: 100,
    label: "Fokus på <br> kundupplevelse",
    prefix: "%",
  },
  {
    number: 24,
    label: "Tillgänglig butik <br> online",
    prefix: "/7",
  },
  {
    number: 1,
    label: "Svensk e-handel <br> under utveckling",
    prefix: "",
  },
];


const AboutCountdown = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="container mt-12.5">
      <div
        ref={ref}
        className="flex items-center justify-between flex-wrap gap-10"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col items-center gap-3 max-lg:w-[calc(50%-40px)] max-lg:text-center"
          >
            {inView && (
              <Title size="80" className="tracking-[-1.5px] text-blue">
                <CountUp end={item.number} duration={3} />
                {item.prefix}
              </Title>
            )}
            <p
              className="font-bold lg:text-[22px] text-lg"
              dangerouslySetInnerHTML={{ __html: item.label }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCountdown;
