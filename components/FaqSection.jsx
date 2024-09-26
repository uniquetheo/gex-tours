import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { faqs } from "@/data/dummy";
import { Button } from "./ui/button";

const FaqSection = () => {
  return (
    <div className="px-4">
      <h2 className="text-xl md:text-2xl font-bold">
        Frequently Asked Questions (FAQs)
      </h2>
      <Accordion type="single" collapsible className="w-full text-left">
        {faqs.slice(0, 4).map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Link href="/faq">
        <Button variant="outline" className="mt-4">
          Read More...
        </Button>
      </Link>
    </div>
  );
};

export default FaqSection;
