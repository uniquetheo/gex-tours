import React from "react";
import PackageCard from "./PackageCard";
import { packages } from "@/data/dummy";

const PackagesSection = () => {
  return (
    <div className="bg-gray-50 w-full h-full">
      <div className="max-w-7xl pb-10 mx-auto">
        <h1 className="text-4xl font-bold text-center py-10">Packages</h1>
        <div className="container flex justify-between w-full h-full">
          <PackageCard />
          {packages
            .filter((pack) => pack.featured)
            .map((item, index) => (
              <PackageCard key={index} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
