import React from "react";

const IncludedInPackage = () => {
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-4 md:px-8 py-10 ">
        <div className="flex flex-col gap-4">
          <h1 className="section-header">
            What&apos;s Included in Our Packages
          </h1>
          <p>
            All our packages include transportation, guided tours, entrance
            fees, and bottled water. Certain packages include meals and
            additional activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncludedInPackage;
