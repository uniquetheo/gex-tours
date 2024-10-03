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
import { travelTypes, travelDurations } from "@/data/dummy";

const CtaForm = () => {
  const durationInput = (
    <div className="flex px-3 gap-3 items-center text-black">
      <label htmlFor="duration">Duration</label>
      <Input
        type="number"
        name="duration"
        aria-label="Duration (hours)"
        placeholder="2 hours"
        className="w-full min-w-[180px] shadow-none rounded-none border border-l-0 border-r-2 border-y-0"
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="sm:flex p-4 gap-4 justify-between rounded bg-white/85 dark:bg-slate-900/85 backdrop-blur"
      >
        <Input
          type="text"
          placeholder="Where to?"
          className="w-full shadow-none rounded-none border border-l-0 sm:border-r-2 border-y-0"
        />
        <Select className="border-none ">
          <SelectTrigger className="w-full rounded-none shadow-none border-none">
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
          <SelectTrigger className="w-full rounded-none shadow-none border sm:border-l-2 border-r-0 border-y-0">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {travelDurations.map((item, idx) => (
                <SelectItem key={idx} value={item.slug}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button
          type="submit"
          className="bg-warm-terracotta hover:bg-warm-terracotta/80 my-3 ml-3 sm:m-0"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CtaForm;
