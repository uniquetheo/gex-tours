"use client";

import { primaryMenu } from "@/data/dummy";
import Link from "next/link";
import { Button } from "./ui/button";
import logo from "/public/images/gex-logo-nobg.png";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderLogo = (
    <Link href="/" className="w-[75px] lg:w-[100px] z-50">
      <Image
        src={logo}
        alt="GEX Travel and Tours"
        width={100}
        height={50}
        className=""
        prioritized
      />
    </Link>
  );

  const renderMenu = primaryMenu.map((item, idx) => (
    <Link
      key={idx}
      href={item.link}
      onClick={() => setMenuOpen(false)}
      // href="#packages"
      passHref
      className={`hover:underline ${
        pathname.includes(item.link) ? "text-warm-terracotta" : ""
      }`}
    >
      {item.name}
    </Link>
  ));

  const menuToggleButton = (
    <button className={`sm:hidden z-40`} onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? (
        <FaTimes className="w-6 h-6 text-warm-terracotta" />
      ) : (
        <FaBars className="w-6 h-6 text-warm-terracotta" />
      )}
    </button>
  );

  const bookButton = (
    <Link
      className=""
      target="blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSdaAwANpxa8SHD0BAtoZnBswCfEj7Cv2X-CPQwXaSH_pWVVuA/viewform"
    >
      <Button className="bg-warm-terracotta hover:bg-warm-terracotta/80">
        Book Now
      </Button>
    </Link>
  );

  return (
    <nav className="flex w-full items-center justify-between text-white px-4 sm:px-8">
      {renderLogo}
      <div className="menu hidden sm:flex md:w-[400px] justify-between gap-3">
        {renderMenu}
      </div>
      {bookButton}
      <div className="sm:hidden">{menuToggleButton}</div>
      {menuOpen && (
        <div className="menu absolute top-0 left-0 rounded-2xl z-30 bg-white dark:bg-slate-900 backdrop-blur text-black dark:text-white w-screen py-8 ">
          <div className="flex justify-end px-3">{menuToggleButton}</div>
          <div className="flex flex-col items-center justify-center gap-3">
            {renderMenu}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
