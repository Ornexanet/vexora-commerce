
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Title from "@/components/ui/title";
import React from "react";
import dynamic from "next/dynamic";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";

const ContactForm = dynamic(() => import("@/components/sections/contact/contactForm"), {
  loading: () => null,
});

const ContactInfo = dynamic(() => import("@/components/sections/contact/contactInfo"), {
  loading: () => null,
});

const FaqsAccordion = dynamic(() => import("@/components/sections/contact/faqsAccordion"), {
  loading: () => null,
});

const MapClient = dynamic(() => import("@/components/sections/contact/MapClient"), {
  loading: () => null,
});

export const metadata = generatePageMetadata({
  title: "Kontakta Ornexa | Elektronik, mobiler och tillbehör",
  description:
    "Kontakta Ornexa för frågor om mobiler, smartklockor, hörlurar, tillbehör, beställningar och kundservice.",
  path: "/contact",
  keywords: [
    "Kontakta Ornexa",
    "Ornexa kundservice",
    "Elektronikbutik",
    "Mobiler",
    "Smartklockor",
    "Hörlurar",
    "Tillbehör",
  ],
});



const Contact = () => {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Store",
          "@id": "https://shop.ornexa.net/#store",
          name: "Ornexa",
          url: "https://shop.ornexa.net",
          description:
            "Ornexa är en svensk elektronikbutik för mobiler, smartklockor, hörlurar och tillbehör.",
          image:
            "https://shop.ornexa.net/images/ornexa-contact-tech-products.webp",
          areaServed: {
            "@type": "Country",
            name: "Sweden",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["sv", "en"],
            url: "https://shop.ornexa.net/contact",
          },
        },
        {
          "@type": "ContactPage",
          "@id": "https://shop.ornexa.net/contact#webpage",
          url: "https://shop.ornexa.net/contact",
          name: "Kontakta Ornexa",
          description:
            "Kontaktsida för Ornexa kundservice, produktfrågor och beställningssupport.",
          inLanguage: "sv-SE",
          isPartOf: {
            "@id": "https://shop.ornexa.net/#website",
          },
          about: {
            "@id": "https://shop.ornexa.net/#store",
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://shop.ornexa.net/contact#breadcrumb",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Hem",
              item: "https://shop.ornexa.net",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Kontakt",
              item: "https://shop.ornexa.net/contact",
            },
          ],
        },
      ],
    }),
  }}
/>

      <PageHeaderWithImg 
      title="Kontakta oss" 
      titleClass=""
      bgImage="/images/ornexa-contact-tech-products.webp"
       />
      <MapClient />
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
              Svar på vanliga frågor 
            </Title>
            <p className="text-light-dark text-xl mt-5">
              Här hittar du svar på vanliga frågor om produkter, leverans, betalning, returer och kundservice
            </p>
          </div>
          <FaqsAccordion />
        </div>
      </section>
    </main>
  );
};

export default Contact;
