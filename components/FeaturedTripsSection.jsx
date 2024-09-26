import { trips } from "@/data/dummy";
import TripCard from "./TripCard";

const FeaturedTrips = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-10">
      <h1 className="section-header">Featured Trips</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        {trips
          .filter((trip) => trip.isFeatured)
          .map((item, index) => (
            <TripCard key={index} {...item} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedTrips;
