"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { travelTypes } from "@/data/dummy";

const CtaForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex p-4 gap-4  justify-between rounded bg-white/85 backdrop:blur"
      >
        <Input
          type="text"
          placeholder="Where to?"
          className="w-full shadow-none rounded-none border border-l-0 border-r-2 border-y-0"
        />
        <Select className="border-none ">
          <SelectTrigger className="w-full rounded-none shadow-none border border-l-0 border-r-2 border-y-0">
            <SelectValue placeholder="Travel Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {travelTypes.map((item, idx) => (
                <SelectItem key={idx} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select className="border-none ">
          <SelectTrigger className="w-full rounded-none shadow-none border-none">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {travelTypes.map((item, idx) => (
                <SelectItem key={idx} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CtaForm;
