import CompanyFeaturesSlider from "@/components/sections/companyFeaturesSlider";
import FaqsAccordion from "@/components/sections/contact/faqsAccordion";
import Cta from "@/components/sections/cta";
import PageHeaderWithImg from "@/components/sections/pageHeaderWithImg";
import Title from "@/components/ui/title";
import { generatePageMetadata } from "@/seo/metadata/pageMetadata";
import React from "react";

export const metadata = generatePageMetadata({
  title: "Vanliga frågor | Ornexa Shop",
  description:
    "Svar på vanliga frågor om beställningar, leveranser, returer, garantier och produkter hos Ornexa Shop.",
  path: "/faqs",
  keywords: [
    "Ornexa FAQ",
    "Vanliga frågor",
    "Leverans",
    "Returer",
    "Garanti",
    "Kundservice",
    "Ornexa Shop",
  ],
});

const Faqs = () => {
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilken garanti gäller för era produkter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alla produkter omfattas av den lagstadgade reklamationsrätten enligt svensk konsumentlagstiftning. Garantitiden kan variera beroende på tillverkare och produktkategori. Information om eventuell tillverkargaranti finns på respektive produktsida.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång är leveranstiden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beställningar skickas normalt inom 1–2 arbetsdagar. Leveranstiden inom Sverige är vanligtvis 2–5 arbetsdagar beroende på produktens tillgänglighet och vald leveransmetod.",
      },
    },
    {
      "@type": "Question",
      name: "Kan jag returnera eller byta en vara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du har 14 dagars ångerrätt enligt distansavtalslagen. Produkten ska returneras i gott skick tillsammans med samtliga tillbehör och originalförpackning.",
      },
    },
    {
      "@type": "Question",
      name: "Levererar ni till hela Sverige?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, vi levererar till kunder i hela Sverige. Leveransalternativ och fraktkostnader visas i kassan innan du slutför ditt köp.",
      },
    },
    {
      "@type": "Question",
      name: "Hur kan jag spåra min beställning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "När din beställning har skickats får du en leveransbekräftelse via e-post med spårningsinformation så att du kan följa paketets status.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "Vanliga frågor",
      item: "https://shop.ornexa.net/faqs",
    },
  ],
}

  return (
    <main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>

      <PageHeaderWithImg title="
Vanliga frågor
" />
      <section className="lg:mt-37.5 md:mt-25 mt-20">
        <div className="container grid lg:grid-cols-[680fr_882fr] gap-7.5">
          <div>
            <Title size="60" className="font-bold leading-[130%]">
              Vanliga frågor och svar
            </Title>
            <p className="text-light-dark text-xl mt-5">
              Här hittar du svar på vanliga frågor om beställningar, leveranser, returer och garantier.
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
