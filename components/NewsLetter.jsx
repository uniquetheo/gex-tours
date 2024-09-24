import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 max-w-[375px] mx-auto">
        <h2 className="text-2xl text-neutral-brown font-bold">
          Join Our Newsletter
        </h2>
        <div className="flex">
          <Input type="email" placeholder="Enter your email" />
          <Button className="bg-warm-terracotta hover:bg-warm-terracotta/80">
            Subscribe
          </Button>
        </div>
        <p>We will send you weekly updates on promotions and hot tour news.</p>
      </div>
    </div>
  );
};

export default Newsletter;
