import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="w-full h-full px-4 pt-8 md:pt-0">
      <div className="flex flex-col gap-4 max-w-[375px] mx-auto">
        <h2 className="text-2xl text-neutral-brown font-bold">
          Join Our Newsletter
        </h2>
        <div className="flex">
          <Input
            type="email"
            placeholder="Enter your email"
            className="rounded-r-none border-r-0"
          />
          <Button className="rounded-l-none border-l-0 bg-warm-terracotta hover:bg-warm-terracotta/80">
            Subscribe
          </Button>
        </div>
        <p className="leading-tight">
          We will send you weekly updates on promotions and hot tour news.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
