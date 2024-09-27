import { businessPartners } from "@/data/dummy";
import Image from "next/image";
import React from "react";
import gcc from "../public/images/ghana-cultural-center.jpg";
import gfh from "../public/images/ghana-facts-history.jpg";
import gm from "../public/images/ghana-museum.jpg";
import gt from "../public/images/ghana-tourism.jpg";
import gws from "../public/images/gws.png";
import ghs from "../public/images/historical-society-ghana.jpg";

const images = [gcc, gt, gws, gfh, gm];
const PartnersSection = () => {
  return (
    <div className="container flex w-full justify-between gap-8 md:gap-12 px-4 md:px-8 py-8 mx-auto ">
      {images.map((partner, idx) => (
        <div key={idx} className="flex justify-center items-center">
          <Image
            src={images[idx]}
            alt={partner}
            // fill
            width={100}
            height={100}
            className="z-40 partner-logo"
          />
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
