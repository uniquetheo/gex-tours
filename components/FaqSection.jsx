import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { faqs } from "@/data/dummy";

const FaqSection = () => {
  return (
    <div className="px-2">
      <h2>Frequently Asked Questions (FAQs)</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.slice(0, 4).map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqSection;
