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
    question: "What is the warranty period for your products?",
    answer:
      "Most of our products come with a 12-month warranty. Specific warranty details are listed on each product page.",
  },
  {
    id: "item-2",
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.",
  },
  {
    id: "item-3",
    question: "Can I return or exchange a product?",
    answer:
      "Yes, you can return or exchange any product within 30 days of purchase, provided it is in its original condition.",
  },
  {
    id: "item-4",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    id: "item-5",
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor your package's progress.",
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
