"use client";

import { useState } from "react";
import { travelServicesOutline } from "@/data/dummy"; // Assuming the data is in a separate file

const OutlineSection = () => {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  return (
    <section id="services" className="bg-white text-black">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <h2 className="section-header mb-6">Our Services</h2>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4">
          {travelServicesOutline.map((service, index) => (
            <button
              key={index}
              className={`py-2 px-4 font-semibold ${
                activeTab === index ? "border-b-2 border-blue-600" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Displaying the active tab content */}
          {travelServicesOutline[activeTab].sections.map((section, index) => (
            <div key={index} className="mb-6 bg-white p-4 shadow rounded">
              <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
              <ul className="list-disc pl-6 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutlineSection;
