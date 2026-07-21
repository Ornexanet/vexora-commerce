import AboutCountdown from "@/components/sections/aboutCountdown";
import BrandsSlider from "@/components/sections/brandsSlider";
import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import OurDifferences from "@/components/sections/OurDifferences";
import OurStory from "@/components/sections/ourStory";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";

import React from "react";

export const metadata = generatePageMetadata({
  title: "Om Ornexa | Elektronikbutik för mobiler och tillbehör",
  description:
    "Lär känna Ornexa, en modern elektronikbutik för mobiler, smartklockor, hörlurar och tillbehör.",
  path: "/about",
  keywords: [
    "Ornexa",
    "Elektronikbutik",
    "Mobiler",
    "Smartklockor",
    "Hörlurar",
  ],
});


const About = () => {
  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://shop.ornexa.net/about#webpage",
          url: "https://shop.ornexa.net/about",
          name: "Om Ornexa",
          description:
            "Ornexa är en svensk e-handelsbutik för mobiler, smartklockor, hörlurar och tillbehör.",
          inLanguage: "sv-SE",
          isPartOf: {
            "@type": "WebSite",
            name: "Ornexa",
            url: "https://shop.ornexa.net",
          },
          about: {
            "@type": "Store",
            name: "Ornexa",
            url: "https://shop.ornexa.net",
            description:
              "En modern elektronikbutik med fokus på smart teknik, tydliga produktval och en smidig köpupplevelse.",
            image: "https://shop.ornexa.net/images/ornexa-about-hero.webp",
            areaServed: {
              "@type": "Country",
              name: "Sweden",
            },
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://shop.ornexa.net/about#breadcrumb",
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
              name: "Om Ornexa",
              item: "https://shop.ornexa.net/about",
            },
          ],
        },
      ],
    }),
  }}
/>

      <PageHeaderWithImg 
      title="Om Ornexa"
      bgImage="/images/ornexa-about-hero.webp"/>
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
