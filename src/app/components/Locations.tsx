"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";

const LOCS = [
  { name: "Visoko",   services: ["Taekwondo","Fitness za žene"],                     phone: "+387 32 123 456", hours: "Pon–Pet: 08:00–20:00" },
  { name: "Kakanj",   services: ["Taekwondo","MMA","Kickboxing","Fitness za žene"], phone: "+387 32 654 321", hours: "Pon–Pet: 08:00–20:00" },
  { name: "Breza",    services: ["Taekwondo","MMA"],                                phone: "+387 32 789 012", hours: "Pon–Pet: 08:00–20:00" },
  { name: "Kiseljak", services: ["Taekwondo"],                                      phone: "+387 32 345 678", hours: "Pon–Pet: 08:00–20:00" },
  { name: "Vareš",    services: ["Taekwondo"],                                      phone: "+387 32 234 567", hours: "Pon–Pet: 08:00–20:00" },
];

export default function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#07090F]">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2rem,7vw,5.5rem)] leading-none text-white mb-3 sm:mb-4">
            Naše lokacije
          </h2>
          <p className="text-white/45 text-sm sm:text-base mb-10 sm:mb-14 lg:mb-16 max-w-xl">
            Dostupni smo na pet lokacija širom centralne Bosne. Pronađite najbliži klub i pridružite se.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {LOCS.map((loc, i) => (
            <SectionReveal key={loc.name} delay={i * 0.06}>
              <TiltCard className="h-full">
                <div className="group h-full bg-[#0C1020] border border-white/[0.05] p-5 sm:p-6 sm:p-7 relative overflow-hidden hover:border-[#D42020]/25 transition-colors duration-300 card-hover">
                  {/* Top bar on hover */}
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#D42020] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D42020] mb-1">Lokacija</p>
                      <h3 className="bebas text-2xl sm:text-3xl text-white leading-none">{loc.name}</h3>
                    </div>
                    <FaMapMarkerAlt className="text-white/8 text-2xl sm:text-3xl mt-0.5 shrink-0" />
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {loc.services.map(s => (
                      <span key={s} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase border border-white/[0.08] text-white/45">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2 pt-4 sm:pt-5 border-t border-white/[0.05]">
                    <div className="flex items-center gap-2 sm:gap-2.5 text-white/40 text-[11px] sm:text-xs">
                      <FaPhoneAlt className="text-[#D42020] shrink-0" />
                      <span>{loc.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-2.5 text-white/40 text-[11px] sm:text-xs">
                      <FaRegClock className="text-[#D42020] shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}