"use client";
import Image from "next/image";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
  FaExpand,
  FaCheck,
  FaUsers,
  FaQuestionCircle,
  FaStar,
  FaInfoCircle,
  FaClock,
  FaDumbbell,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import LocationSection from "@/app/components/LocationSection";
import Application from "@/app/components/kickboxing/Application";
import Trainers from "@/app/components/taekwondo/Trainers";
import Applications from "@/app/components/taekwondo/Application";

const backgroundImage = new URL(
  "../../../../public/image.png",
  import.meta.url
);

const galleryImages = [
  "/WhatsApp Image 2025-05-12 at 14.07.09.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.09 (1).jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.10 (1).jpeg",
  "/WhatsApp Image 2025-05-12 at 14.13.38.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.11.55.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.10 (4).jpeg",
];

export default function KickboxingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [faqOpen, setFaqOpen] = useState(Array(3).fill(false));

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#181818] text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-76 w-full h-full flex flex-col justify-center items-center text-center px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl aladin-font font-bold text-white drop-shadow-xl relative w-fit">
          Taekwondo
        </h1>

        <p className="text-lg z-10 w-[80%] md:text-xl mt-4">
          Spoj snage, brzine i strategije – taekwondo koji mijenja život!
Pridruži se našem kolektivu i postani najbolja verzija sebe!
Nudimo taekwondo treninge u mnogim gradovima širom Bosne i Hercegovine – pronađi nas i započni svoju borilačku priču već danas!{" "}
        </p>

        <button
          onClick={() => {
            const target = document.getElementById("application");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="mt-6 border xl:mb-12 mb-12 border-neutral-600 px-6 py-3 bg-black z-10 cursor-pointer text-white font-bold w-fit shadow-lg hover:bg-white hover:text-black transition-all duration-150 flex items-center"
        >
          <FaUsers className="mr-2" /> Prijavi se odmah
        </button>
      </div>
      <div className="z-50">
         <LocationSection locations={["Visoko", "Kakanj", "Breza","Vareš", "Kiseljak"]} />
      </div>

      {/* Gallery Section */}
      <div className="relative bg-gradient-to-b from-[#242424] to-zinc-1000 py-12 text-center px-6 md:px-16">
        <h2 className="text-6xl aladin-font font-bold text-main-club-color mb-2">
          Galerija
        </h2>
        <p className="text-lg md:text-xl mb-4">
          Pritiskom na sliku možete ući u detaljni prikaz.
        </p>

        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Main Image */}
          <div className="relative h-80 md:h-[500px] cursor-pointer overflow-hidden rounded-xl shadow-2xl border border-zinc-700 hover:border-white transition-all">
            <Image
              src={galleryImages[currentImage]}
              alt={`Kickboxing ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl transition-all duration-500"
              onClick={() => setIsFullScreen(true)}
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 justify-center flex-wrap">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`relative w-24 h-16 md:w-36 md:h-24 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  currentImage === idx
                    ? "border-[#f45b44]"
                    : "border-transparent hover:border-white"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <Image
            src={galleryImages[currentImage]}
            alt="Kickboxing Training Fullscreen"
            width={900}
            height={600}
            className="rounded-lg"
          />
          <button
            className="absolute top-6 right-6 cursor-pointer text-white text-3xl"
            onClick={() => setIsFullScreen(false)}
          >
            ✖
          </button>
        </div>
      )}

      <Trainers />

      {/* Contact Section */}
      <Applications />

      <div className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-main-club-color mb-6 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Kontakt i Lokacija
        </h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-main-club-color" /> Taekwondo sala,
            Visoko, Kakanj, Breza, Kiseljak, Vareš
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-main-club-color" /> 061 376 075
          </p>
        </div>
      </div>
    </div>
  );
}
