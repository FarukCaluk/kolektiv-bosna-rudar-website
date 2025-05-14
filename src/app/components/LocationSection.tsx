import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2"; // outlined version

interface LocationSectionProps {
  locations: string[];
}

const LocationSection: React.FC<LocationSectionProps> = ({ locations }) => {
  return (
    <div className="bg-gradient z-50-to-t cursor-default from-[#ff8d7cb4] to-[#F45B44] text-white border-y border-[#ff8d7cb4] py-8 px-4 sm:px-8 shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center text-center">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extralight">
              {location}
            </span>
            <HiOutlineMapPin className="text-5xl sm:text-6xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSection;
