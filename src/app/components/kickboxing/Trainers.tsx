"use client";
import Image from "next/image";
import { GiBlackBelt } from "react-icons/gi";

const trainers = [
  {
    name: "Edin Kajević Kaja",
    image: "/trainers/kaja.jpg", // zamijeni stvarnim putanjama
    belt: "Crni pojas",
    dan: "5.DAN",
    border: "border-amber-500",
  },
  {
    name: "Faruk Čaluk",
    image: "/trainers/caluk.jpg",
    belt: "Crni pojas",
    dan: "2.DAN",
    border: "border-neutral-400",
  },
  {
    name: "Adnan Kozlo",
    image: "/trainers/kozlo.jpg",
    belt: "Crni pojas",
    dan: "2.DAN",
    border: "border-neutral-400",
  },
];

export default function Trainers() {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-6 sm:px-10">
      <h2 className="text-4xl sm:text-5xl aladin-font text-center text-white mb-12">
        Treneri
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className={`border cursor-pointer hover:animate-bounce ${trainer.border} rounded-md overflow-hidden shadow-xl bg-black`}
          >
            <div className="relative w-full h-80">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center  bg-[#242424] border-t border-neutral-400 py-4 px-3">
              <h3 className="text-4xl aladin-font font-bold">
                {trainer.name.toUpperCase()}
              </h3>
              <div className="flex justify-center items-center">
                <GiBlackBelt className="text-white size-12 mr-2" />
                <p className="text-white my-2 text-2xl -rotate-1 font-light">
                  {trainer.belt}
                </p>
              </div>
              <p className="text-amber-400 font-semibold">{trainer.dan}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
