import ContactForm from "@/components/sections/contact/contactForm";
import ContactInfo from "@/components/sections/contact/contactInfo";
import FaqsAccordion from "@/components/sections/contact/faqsAccordion";
import Map from "@/components/sections/contact/map";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Title from "@/components/ui/title";
import React from "react";

const Contact = () => {
  return (
    <main>
      <PageHeaderWithImg title="Contact Us" titleClass="" />
      <Map />
      <section className="lg:mt-37.5 md:mt-25 mt-20">
        <div className="container grid lg:grid-cols-[649fr_913fr] gap-7.5">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
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
    </main>
  );
};

export default Contact;
