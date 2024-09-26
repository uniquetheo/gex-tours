import { services } from "@/data/dummy";
import Image from "next/image";
import React from "react";
import { AiFillAccountBook } from "react-icons/ai";

const ServicesSection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-8">
        <span className="section-header">Services</span>
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          Discover Ghana with Local Experts
        </h1>
        <p className="text-left mt-5">
          At GEX - Ghana Explore eXperts, we specialize in crafting unique
          travel experiences that go beyond the ordinary. Our tours emphasize
          sustainability and responsible tourism, offering immersive cultural
          journeys led by expert local guides. Whether you&quot;re exploring
          Ghana&quot;s rich history, vibrant communities, or breathtaking
          natural landscapes, we ensure every adventure is meaningful and
          authentic
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-5 shadow-md rounded-md">
              <AiFillAccountBook className="text-4xl text-primary" />
              <h1 className="text-2xl font-bold mt-5">{service.name}</h1>
              <p className="mt-3">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
