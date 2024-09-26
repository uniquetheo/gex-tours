import { businessPartners } from "@/data/dummy";
import Image from "next/image";
import React from "react";
import airbnb from "../public/images/airbnb.svg";
import flyEmirates from "../public/images/flyEmirates.svg";
import trivago from "../public/images/trivago.svg";
import turkishAirlines from "../public/images/turkish-airlines.svg";
import swiss from "../public/images/swiss.svg";

const images = [flyEmirates, trivago, airbnb, turkishAirlines, swiss];
const PartnersSection = () => {
  return (
    <div className="container flex w-full justify-between gap-8 md:gap-12 px-4 md:px-8 py-8 mx-auto ">
      {images.map((partner, idx) => (
        <div key={idx} className="flex justify-center items-center lg:h-20">
          <Image
            src={images[idx]}
            alt={partner}
            // fill
            width={150}
            height={150}
            className="z-40"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
