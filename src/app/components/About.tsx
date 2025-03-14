"use client";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import Gallery from "../../../public/backgrounds/gallery.png";
import { useEffect, useState } from "react";

const backgroundImage = new URL(
  "../../../public/backgrounds/japan-gradient.png",
  import.meta.url
);

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about-image");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about"
      className="w-full min-h-screen cursor-default relative bg-cover bg-center px-6 sm:px-8"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center z-20 max-w-6xl px-4 mx-auto">
        <h1 className="text-6xl pt-12 sm:text-5xl md:text-7xl lg:text-8xl aladin-font font-semibold text-white text-center sm:text-left">
          O KOLEKTIVU
        </h1>
        <div className="py-1 my-4 w-44 sm:w-52 md:w-64 lg:w-80 bg-gradient-to-r from-white to-[#ffffff49]"></div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl w-full md:w-[60%] text-white/90 leading-relaxed font-medium text-center sm:text-left">
            Želite li naučiti samoobranu? Poboljšati fizičku kondiciju? Razviti
            koordinaciju i samopouzdanje? Taekwondo je idealan sport za vas!
            Korejska borilačka vještina s kombinacijom udaraca nogama, rukama i
            šakama nudi učinkovitost i izvanrednu tjelovježbu. <br /> <br />
            Naši treninzi su prilagođeni svim uzrastima i razinama vještine.
            Pridružite nam se i postanite dio zajednice koja teži zdravom načinu
            života i sportskim uspjesima!
          </p>
          <div
            id="about-image"
            className={`transition-transform duration-700 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <Image
              src={Gallery}
              alt="gallery"
              height={200}
              width={750}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 text-white text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-main-club-color" />
            <span>061 933 207</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-main-club-color" />
            <span>Muhašinovići bb, Visoko, BiH</span>
          </div>
          <div className="flex items-center gap-2">
            <FaFacebook className="text-main-club-color" />
            <span>FB: Taekwondo klub Bosna Visoko</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-main-club-color" />
            <span>taekwondo.klub.bosna@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
