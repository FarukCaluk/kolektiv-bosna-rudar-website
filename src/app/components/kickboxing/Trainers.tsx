"use client";
import Image from "next/image";
import { GiBlackBelt } from "react-icons/gi";

const trainers = [
  {
    name: "Birnas Karamović",
    image: "/trainers/WhatsApp Image 2025-05-14 at 17.18.29.jpeg", // zamijeni stvarnim putanjama
    dan: "Kickboxing trainer",
    border: "border-amber-500",
  },
];

export default function Trainers() {
  return (
    <section className="from-[#1f1f1f] to-[#FFBB00] bg-gradient-to-b text-white items-center py-16 px-6 sm:px-10">
      <h2 className="text-4xl sm:text-5xl aladin-font text-center text-white mb-12">
        Treneri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center md:grid-cols-1 gap-10 max-w-xs mx-auto">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className={`border cursor-pointer hover: ${trainer.border} rounded-md overflow-hidden shadow-xl bg-black`}
          >
            <div className="relative w-full h-80">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center items-center bg-[#242424] border-t border-neutral-400 py-4 px-3">
              <h3 className="text-4xl aladin-font font-bold">
                {trainer.name.toUpperCase()}
              </h3>
              <p className="text-amber-400 font-semibold">{trainer.dan}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
