import Image from "next/image";
import site1 from "@/public/images/couple-on-a-wooden-boat.jpg";
import { MapPin, Clock2 } from "lucide-react";
import RenderStars from "./RatingStars";

const PackageCard = ({ name, duration, location, price, image, rating }) => {
  return (
    <>
      {name ? (
        <div className="flex flex-col bg-white rounded-md shadow w-full max-w-[350px]">
          <div className="flex flex-col p-2 h-full">
            <div className="w-full relative min-h-[150px]">
              <Image src={site1} alt="airbnb" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between h-full gap-3 text-muted-foreground py-2">
              <h2 className="text-2xl font-semibold text-balance text-earthly-green leading-none">
                {name}
              </h2>
              <div className="flex flex-col gap-2">
                <span className="flex gap-2">
                  <Clock2 /> {duration}
                </span>
                <span className="flex gap-2">
                  <MapPin /> {location}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t-2" />
          <div className="flex items-center justify-between gap-1 p-2 max-h-[100px]">
            <div className="flex flex-col gap-1">
              <div className="flex">
                <RenderStars rating={rating} />
              </div>
              <span className="text-gray-500">({rating})</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-neutral-brown font-bold text-2xl">
                ${price.toFixed(2).toLocaleString()}
              </span>
              <span className="text-muted-foreground">per person</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PackageCard;
