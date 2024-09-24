"use client";

import { primaryMenu } from "@/data/dummy";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "/public/images/gex-logo-nobg.png";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex relative w-full items-center justify-between text-white">
      <Link href="/">
        <Image
          src={logo}
          alt="GEX Travel and Tours"
          width={100}
          height={50}
          className="absolute -left-1 -top-1"
        />
      </Link>
      <div className="menu flex w-[400px] justify-between">
        {primaryMenu.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="hover:text-warm-terracotta"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Button className="bg-warm-terracotta hover:bg-warm-terracotta/80">Book Now</Button>
    </div>
  );
};

export default NavBar;
