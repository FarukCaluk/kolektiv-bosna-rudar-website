"use client";
import React from "react";
import { FaDumbbell, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function WomensTraining() {
  return (
    <div className="bg-[#242424] text-white min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-7xl md:text-7xl aladin-font font-bold text-main-club-color mb-4 animate-fade-in">
          Trening za Žene
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
          Otkrijte snagu i energiju kroz treninge prilagođene ženama, uz
          vrhunsku podršku i motivaciju!
        </p>

        {/* Image */}
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg shadow-lg border border-stone-600 group">
          <Image
            src="/women-training.jpg"
            alt="Trening za žene"
            layout="fill"
            objectFit="cover"
            className="transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Training Information */}
        <div className="bg-[#2b2b2b] p-6 rounded-lg shadow-md border border-stone-600 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold text-main-club-color mb-4">
            Zašto odabrati naše treninge?
          </h2>
          <ul className="text-gray-300 space-y-3 text-left md:text-center">
            {[
              "Poboljšajte kondiciju i fizičku snagu",
              "Treninzi prilagođeni svim uzrastima i nivoima",
              "Pozitivna i motivirajuća atmosfera",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <FaDumbbell className="text-main-club-color animate-pulse" />
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-[#2b2b2b] p-6 rounded-lg shadow-md border border-stone-600 transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold text-main-club-color mb-4">
            Kontakt i Lokacija
          </h2>
          <div className="flex flex-col space-y-4 text-gray-300">
            <p className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <FaMapMarkerAlt className="text-main-club-color animate-bounce" />{" "}
              TKD Sala Rudar, Kakanj
            </p>
            <p className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <FaPhone className="text-main-club-color animate-pulse" /> 061 376
              075
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
