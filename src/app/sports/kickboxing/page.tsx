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

const backgroundImage = new URL(
  "../../../../public/backgrounds/main-background.png",
  import.meta.url
);

const galleryImages = [
  "/kickboxing-1.jpg",
  "/kickboxing-2.jpg",
  "/kickboxing-3.jpg",
];

const testimonials = [
  {
    name: "Ivan P.",
    review:
      "Kickboxing mi je pomogao da poboljšam kondiciju i steknem disciplinu!",
  },
  {
    name: "Ana M.",
    review: "Odlični treninzi, fantastična ekipa i super atmosfera!",
  },
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
      <div className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <h1 className="text-6xl font-bold text-main-club-color drop-shadow-xl flex items-center">
          <FaDumbbell className="mr-3" /> Kickboxing
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
          <FaInfoCircle className="inline text-main-club-color mr-2" />
          Kombinacija snage, brzine i strategije. Pridružite nam se i postanite
          bolja verzija sebe!
        </p>
        <button className="mt-6 px-6 py-3 bg-[#f45b44] z-10 cursor-pointer text-black font-bold rounded-lg shadow-lg hover:bg-white transition-all duration-150 flex items-center">
          <FaUsers className="mr-2" /> Prijavi se odmah
        </button>
      </div>

      {/* Gallery Section */}
      <div className="relative bg-gradient-to-b from-[#242424] to-zinc-1000 py-12 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-main-club-color mb-6 flex items-center">
          <FaStar className="mr-2" /> Galerija
        </h2>
        <div className="relative w-full max-w-4xl mx-auto h-80 md:h-[500px] overflow-hidden shadow-lg flex items-center justify-center">
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-gray-700"
          >
            <FaArrowLeft className="text-white text-2xl" />
          </button>
          <Image
            src={galleryImages[currentImage]}
            alt="Kickboxing Training"
            layout="fill"
            objectFit="cover"
            className="transition-all border rounded-lg border-zinc-400 duration-500 cursor-pointer"
            onClick={() => setIsFullScreen(true)}
          />
          <button
            onClick={nextImage}
            className="absolute right-4 p-2 bg-black/50 rounded-full cursor-pointer hover:bg-gray-700"
          >
            <FaArrowRight className="text-white text-2xl" />
          </button>
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

      {/* Contact Section */}
      <div className="px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-main-club-color mb-6 flex items-center">
          <FaMapMarkerAlt className="mr-2" /> Kontakt i Lokacija
        </h2>
        <div className="space-y-4 text-lg text-gray-300">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-main-club-color" /> Kickboxing sala,
            Kakanj & Breza
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-main-club-color" /> 061 376 075
          </p>
        </div>
      </div>
    </div>
  );
}
