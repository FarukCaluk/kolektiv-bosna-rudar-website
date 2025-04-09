"use client";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import ClubLogo from "../../../public/logo.png";
import { useEffect } from "react";

const backgroundImage = new URL(
  "../../../public/backgrounds/main-background.png",
  import.meta.url
);

export default function Header() {
  useEffect(() => {
    const smoothScroll = (event: any) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });
    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div
      className="w-full cursor-default relative h-[1000] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content in the center */}
      <div className="absolute inset-0 flex flex-col text-start items-center sm:items-start justify-center z-20 px-4 sm:px-10 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6">
          <h1 className="text-6xl xs:text-3xl sm:text-5xl md:text-7xl lg:text-8xl aladin-font font-bold text-white leading-tight drop-shadow-xl text-center sm:text-left">
            KOLEKTIV <br />
            <span className="text-main-club-color">BOSNA RUDAR</span>
          </h1>
          <div>
            <Image
              alt="bosna-rudar"
              className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
              src={ClubLogo}
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="py-0.5 my-4 w-40 xs:w-52 sm:w-64 md:w-72 lg:w-80 bg-gradient-to-r from-white to-[#ffffff49] drop-shadow-xl"></div>
        <p className="text-pretty text-lg text-white/90 leading-relaxed font-medium text-center sm:text-left">
          <span className="text-main-club-color font-bold">
            Kolektiv Bosna-Rudar
          </span>{" "}
          je sportska zajednica posvećena borilačkim vještinama i rekreaciji.
          Nudimo taekwondo, kickboxing, MMA i fitness za žene, pružajući
          vrhunske treninge za sve uzraste. <br /> <br /> Taekwondo sekcije
          djeluju u Visokom, Kaknju, Brezi, Kiseljaku i Varešu, dok su
          kickboxing i MMA dostupni u Kaknju i Brezi. Fitness za žene održava se
          u Kaknju i Visokom. Naš cilj je razvoj sporta, zdravog načina života i
          takmičarskih uspjeha!
        </p>
        {/* Additional Call-to-Action Buttons */}
        <div className="flex xs:flex-row gap-4 mt-6">
          <a
            href="#about"
            className="px-4 xs:px-6 py-2 text-white bg-black text-xs xs:text-sm sm:text-base hover:text-black hover:bg-white font-semibold shadow-lg hover:bg-opacity-90 transition text-center"
          >
            Saznaj Više
          </a>
          <a
            href="#contact"
            className="px-4 xs:px-6 py-2 text-white border border-white text-xs xs:text-sm sm:text-base font-semibold shadow-lg hover:bg-white hover:text-black transition text-center"
          >
            Kontaktiraj Nas
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer z-20 animate-bounce"
      >
        <span className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide font-semibold">
          Istraži više
        </span>
        <FaChevronDown className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 text-white mt-2" />
      </a>
    </div>
  );
}
