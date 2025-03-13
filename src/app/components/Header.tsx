"use client";
import Image from "next/image";
import ClubLogo from "../../../public/logo.png";

const backgroundImage = new URL(
  "../../../public/backgrounds/main-background.png",
  import.meta.url
);

export default function Header() {
  return (
    <div
      className="w-full h-screen cursor-default relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content in the center */}
      <div className="absolute inset-0 flex flex-col text-start items-start justify-center z-20 px-4 sm:px-8">
        <div className="flex items-end">
          <h1 className="text-3xl sm:text-5xl md:text-8xl aladin-font font-semibold text-white">
            KOLEKTIV <br />
            <span className="text-main-club-color">BOSNA RUDAR</span>
          </h1>

          <div>
            <Image
              alt="bosna-rudar"
              className="p-4"
              src={ClubLogo}
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="py-1 my-2 w-96 bg-gradient-to-r from-white to-[#ffffff49]"></div>
        <p className="text-pretty text-2xl w-[70%]">
          <span className="text-main-club-color font-bold">
            Kolektiv Bosna-Rudar
          </span>{" "}
          je sportska zajednica posvećena borilačkim vještinama i rekreaciji.
          Nudimo taekwondo, kickboxing, MMA i fitness za žene, pružajući
          vrhunske treninge za sve uzraste. Taekwondo sekcije djeluju u Visokom,
          Kaknju, Brezi, Kiseljaku i Varešu, dok su kickboxing i MMA dostupni u
          Kaknju i Brezi. Fitness za žene održava se u Kaknju i Visokom. Naš
          cilj je razvoj sporta, zdravog načina života i takmičarskih uspjeha!{" "}
        </p>
      </div>
    </div>
  );
}
