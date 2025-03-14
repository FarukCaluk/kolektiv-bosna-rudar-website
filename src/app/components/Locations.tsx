"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import React from "react";

const backgroundImage = new URL(
  "../../../public/backgrounds/japan-gradient.png",
  import.meta.url
);

const locations = [
  {
    name: "Visoko",
    description:
      "Taekwondo sekcija dostupna za sve uzraste. Pridružite nam se u Visokom i postanite najbolja verzija sebe!",
    services: ["Taekwondo"],
    contact: {
      phone: "+387 32 123 456",
      hours: "Pon - Pet: 08:00 - 20:00",
    },
  },
  {
    name: "Kakanj",
    description:
      "MMA i Kickboxing trenuci u Kaknju. Ovdje možete razviti svoje borilačke vještine i postaviti nove ciljeve.",
    services: ["MMA", "Kickboxing", "Fitness za žene"],
    contact: {
      phone: "+387 32 654 321",
      hours: "Pon - Pet: 08:00 - 20:00",
    },
  },
  {
    name: "Breza",
    description:
      "Kickboxing i MMA trenuci u Brezi. Dođite i postanite bolji borac uz naše specijalizirane programe.",
    services: ["MMA", "Kickboxing"],
    contact: {
      phone: "+387 32 789 012",
      hours: "Pon - Pet: 08:00 - 20:00",
    },
  },
  {
    name: "Kiseljak",
    description:
      "Taekwondo sekcija u Kiseljaku. Idealno mjesto za početak vašeg sportskog puta.",
    services: ["Taekwondo"],
    contact: {
      phone: "+387 32 345 678",
      hours: "Pon - Pet: 08:00 - 20:00",
    },
  },
  {
    name: "Vareš",
    description:
      "Taekwondo sekcija u Varešu, pružajući priliku za fizički i mentalni razvoj.",
    services: ["Taekwondo"],
    contact: {
      phone: "+387 32 234 567",
      hours: "Pon - Pet: 08:00 - 20:00",
    },
  },
];

export default function Locations() {
  return (
    <div
      id="locations"
      className="w-full min-h-screen bg-gradient-to-r from-[#34b3a0] to-[#2c8e74] text-white py-16 px-6 sm:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-lg mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 aladin-font">
          NAŠE LOKACIJE
        </h1>
        <div className="py-1 mb-10 w-44 sm:w-52 md:w-64 lg:w-80 mx-auto bg-gradient-to-r from-white to-[#ffffff49]"></div>
        <p className="text-lg sm:text-xl text-white/80 mb-12">
          Naše sekcije su dostupne na više lokacija, sa različitim treninzima i
          programima. Saznajte više o svakoj lokaciji i pridružite se našem
          kolektivu.
        </p>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-[#1d1f20] p-6 rounded-3xl shadow-lg transform hover:scale-105 transition duration-300 border-l-8 border-l-[#ff9900]"
            >
              <div className="mb-4">
                <FaMapMarkerAlt className="text-white text-4xl mb-4" />
                <h2 className="text-2xl font-semibold mb-2">{location.name}</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  {location.description}
                </p>
                <div className="text-white/80 mb-4">
                  <h3 className="font-semibold text-xl mb-2">Usluge:</h3>
                  <ul className="list-disc list-inside text-sm">
                    {location.services.map((service, idx) => (
                      <li key={idx} className="text-lg">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-white text-lg">
                  <FaPhoneAlt className="text-xl" />
                  <span>{location.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-white text-lg">
                  <FaRegClock className="text-xl" />
                  <span>{location.contact.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
