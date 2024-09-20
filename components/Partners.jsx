import { businessPartners } from "@/data/dummy";
import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  return (
    <div>
      {businessPartners.map((partner, idx) => (
        <div
          key={idx}
          className="flex relative justify-center items-center h-20"
        >
          <Image src={partner.image} alt={partner.name} fill className="" />
        </div>
      ))}
    </div>
  );
};

export default PartnersSection;
