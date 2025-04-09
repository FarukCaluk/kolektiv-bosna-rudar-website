"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaSearchPlus } from "react-icons/fa";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-5.png",
  "/images/gallery-6.webp",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
  "/images/gallery-9.jpg",
  "/images/gallery-10.jpg",
  "/images/gallery-11.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl aladin-font font-bold text-center mb-2">
          Galerija
        </h1>
        <p className="text-center text-lg mb-12">
          Posjetite naše socijalne mreže za još kvalitetnih slika sa takmičenja,
          treninga, itd.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-64 cursor-pointer border border-neutral-400 rounded-lg overflow-hidden group"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Galerija slika ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <FaSearchPlus className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative max-w-3xl w-full px-4">
              <Image
                src={selectedImage}
                alt="Preview"
                layout="responsive"
                width={1000}
                height={600}
                className="rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-xl bg-neutral-700 rounded-full p-2 hover:bg-neutral-500"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/TKDBOSNA/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:underline text-lg"
          >
            <FaFacebook className="mr-2" /> Posjetite našu Facebook stranicu za
            više slika
          </a>
        </div>
      </div>
    </div>
  );
}
