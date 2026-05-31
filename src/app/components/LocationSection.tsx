import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Props { locations: string[]; }

export default function LocationSection({ locations }: Props) {
  return (
    <div className="border-y border-white/[0.06] bg-[#0C1020] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
        {locations.map((loc, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group">
            <FaMapMarkerAlt className="text-[#D42020] text-lg" />
            <span className="text-sm font-medium tracking-wider uppercase">{loc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}