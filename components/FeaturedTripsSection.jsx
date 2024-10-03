import { trips } from "@/data/dummy";
import TripCard from "./TripCard";

const FeaturedTrips = () => {
  return (
    <section id="trips" className="bg-white text-black">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <h1 className="section-header">Featured Trips</h1>
        <h1 className="text-2xl md:text-4xl font-bold text-left">
          Discover Ghana with Local Experts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
          {trips
            .filter((trip) => trip.isFeatured)
            .map((item, index) => (
              <TripCard key={index} {...item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;
