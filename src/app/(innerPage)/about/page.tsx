import AboutCountdown from "@/components/sections/aboutCountdown";
import BrandsSlider from "@/components/sections/brandsSlider";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import OurDifferences from "@/components/sections/OurDifferences";
import OurStory from "@/components/sections/ourStory";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vexora - About Us",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const About = () => {
  return (
    <main>
      <PageHeaderWithImg title="About Us" />
      <OurStory />
      <AboutCountdown />
      <OurDifferences />
      <BrandsSlider />
      {/* <TestimonialSlider /> */}
      <CompanyFeaturesSlider
        className="bg-transparent pt-0"
        cardClassName="bg-[#F5F5F7]"
      />
    </main>
  );
};

export default About;
