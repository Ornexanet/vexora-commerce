import Title from "@/components/ui/title";
import React from "react";

const sortinfoData = [
  {
    title: "Komfort som varar",
    description: "Px8 kombinerar exklusiva material med genomtänkt design.",
  },
  {
    title: "Vinklade kolfibermembran",
    description:
      "Px8:s noggrant vinklade högtalarelement med kolfibermembran ger en tydligare stereobild.",
  },
  {
    title: "Högupplöst ljud",
    description:
      "Px8 använder den trådlösa tekniken aptX™ Adaptive för högupplöst ljud.",
  },
  {
    title: "Stäng ute bruset",
    description:
      "Px8:s egen brusreducering ger en enastående musikupplevelse",
  },
];
const ProductSortInfo = () => {
  return (
    <div className="container mt-25">
      <div
        style={{
          backgroundImage: `url("/images-optimized/product-details/sort-info-bg.webp")`,
        }}
        className="relative bg-cover bg-center rounded-[15px] overflow-hidden pb-15 xl:pt-[584px] lg:pt-100 pt-80 lg:px-12.5 px-5 z-10"
      >
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(180deg,_rgba(0,15,41,0)_39.06%,_rgba(0,15,41,0.5)_100%)] -z-10"></div>
        <div >
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-x-6 gap-y-8">
            {sortinfoData.map((item, index) => (
              <div key={index}>
                <Title asChild size="28" className="text-primary-foreground">
                  <h5>{item.title}</h5>
                </Title>
                <hr className="border-light-dark sm:my-6 my-3" />
                <p className="text-lg text-primary-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSortInfo;
