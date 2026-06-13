"use client";
import React from "react";
import Title from "../ui/title";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const data = [
  {
    number: 10,
    label: "Products <br> Delivered",
    prefix: "+",
  },
  {
    number: 2.5,
    label: "5-Star <br> Reviews",
    prefix: "k+",
  },
  {
    number: 98,
    label: "Customer <br> Satisfaction",
    prefix: "%",
  },
  {
    number: 45,
    label: "Countries <br> Served",
    prefix: "+",
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
