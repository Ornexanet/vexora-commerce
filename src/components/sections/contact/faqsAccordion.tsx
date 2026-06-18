import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  
     {
    id: "item-1",
    question: "Vilken garanti gäller för era produkter?",
    answer:
      "Alla produkter omfattas av den lagstadgade reklamationsrätten enligt svensk konsumentlagstiftning. Garantitiden kan variera beroende på tillverkare och produktkategori. Information om eventuell tillverkargaranti finns på respektive produktsida.",
  },
  {
    id: "item-2",
    question: "Hur lång är leveranstiden?",
    answer:
      "Beställningar skickas normalt inom 1–2 arbetsdagar. Leveranstiden inom Sverige är vanligtvis 2–5 arbetsdagar beroende på produktens tillgänglighet och vald leveransmetod.",
  },
  {
    id: "item-3",
    question: "Kan jag returnera eller byta en vara?",
    answer:
      "Ja. Du har 14 dagars ångerrätt enligt distansavtalslagen. Produkten ska returneras i gott skick tillsammans med samtliga tillbehör och originalförpackning.",
  },
  {
    id: "item-4",
    question: "Levererar ni till hela Sverige?",
    answer:
      "Ja, vi levererar till kunder i hela Sverige. Leveransalternativ och fraktkostnader visas i kassan innan du slutför ditt köp.",
  },
  {
    id: "item-5",
    question: "Hur kan jag spåra min beställning?",
    answer:
      "När din beställning har skickats får du en leveransbekräftelse via e-post med spårningsinformation så att du kan följa paketets status.",
  },
];



const FaqsAccordion = () => {
  return (
    <div className="bg-[#F5F5F7] rounded-[30px] xl:px-15 lg:px-12 px-10 py-10">
      <Accordion
        defaultValue={faqData[0].id}
        type="single"
        collapsible
        className="w-full"
      >
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border-[#D1D1D6] last:border-b-0"
          >
            <AccordionTrigger
              hideIcon
              className="py-8 hover:no-underline group"
            >
              <div className="flex items-center justify-between w-full text-left">
                <span className="text-xl font-medium leading-[130%]">
                  {item.question}
                </span>
                <div className="size-9 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 bg-white group-data-[state=open]:bg-blue">
                  <Plus className="size-4 text-foreground group-data-[state=open]:hidden" />
                  <Minus className="size-4 text-white hidden group-data-[state=open]:block" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#86868B] pb-6 leading-[150%]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqsAccordion;
