import React from "react";
import PackageCard from "./PackageCard";
import { packages } from "@/data/dummy";

const PackagesSection = () => {
  return (
    <section id="packages" className="w-full h-full bg-white text-black">
      <div className="container mx-auto pb-10 px-4 md:px-8">
        <h1 className="section-header py-4">Packages</h1>
        <div className="w-full flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {packages
              .filter((pack) => pack.featured)
              .map((item, index) => (
                <PackageCard key={index} {...item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
