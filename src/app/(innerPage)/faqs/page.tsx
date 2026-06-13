import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import FaqsAccordion from "@/components/sections/contact/faqsAccordion";
import Cta from "@/components/sections/cta";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Title from "@/components/ui/title";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Vexora - FAQs",
  description:
    "Vexora - Single Product eCommerce Next.js Template for Tech and Gadget Stores",
};

const Faqs = () => {
  return (
    <main>
      <PageHeaderWithImg title="FAQs" />
      <section className="lg:mt-37.5 md:mt-25 mt-20">
        <div className="container grid lg:grid-cols-[680fr_882fr] gap-7.5">
          <div>
            <Title size="60" className="font-bold leading-[130%]">
              Need Answers? We’ve Got You Covered
            </Title>
            <p className="text-light-dark text-xl mt-5">
              Explore common questions about our products, shipping, returns,
              and more.
            </p>
          </div>
          <FaqsAccordion />
        </div>
      </section>
      <Cta />
      <CompanyFeaturesSlider
        className="bg-transparent pt-0"
        cardClassName="bg-[#F5F5F7]"
      />
    </main>
  );
};

export default Faqs;
