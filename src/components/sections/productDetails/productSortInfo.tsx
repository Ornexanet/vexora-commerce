import Title from "@/components/ui/title";
import React from "react";

const sortinfoData = [
  {
    title: "Comfort, for longer",
    description: "Px8 features luxurious materials and purposeful design.",
  },
  {
    title: "Angled Carbon Cones",
    description:
      "Px8’s precisely angled Carbon Cone drive units improve stereo imaging.",
  },
  {
    title: "High-resolution sound ",
    description:
      "Px8 uses aptX™ Adaptive wireless technology for  high-resolution sound.",
  },
  {
    title: "Cancel the noise",
    description:
      "Px8's proprietary noise-canceling technology ensures outstanding music",
  },
];
const ProductSortInfo = () => {
  return (
    <div className="container mt-25">
      <div
        style={{
          backgroundImage: `url("/images/product-details/sort-info-bg.png")`,
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
