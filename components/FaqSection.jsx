"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { faqs } from "@/data/dummy";
import { Button } from "./ui/button";
import { useState } from "react";

const FaqSection = () => {
  const [full, setFull] = useState(false);
  return (
    <div className="px-4 ">
      <h2 className="text-xl md:text-2xl font-bold">
        Frequently Asked Questions (FAQs)
      </h2>
      <Accordion type="single" collapsible className="w-full text-left">
        {full
          ? faqs.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))
          : faqs.slice(0, 4).map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
        {}
      </Accordion>
      <Button
        onClick={() => setFull((prev) => !prev)}
        variant="outline"
        className="mt-4"
      >
        {full ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
};

export default FaqSection;
