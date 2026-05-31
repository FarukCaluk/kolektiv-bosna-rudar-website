"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../components/SectionReveal";
import { FaFacebook } from "react-icons/fa";
import { HiX } from "react-icons/hi";

const images = [
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.18 (1).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.18 (2).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.18 (3).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.18.jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.19 (1).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.19 (2).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.19 (3).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.19.jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.20 (2).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.20 (3).jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.20.jpeg",
  "/images/galeryphotos/WhatsApp Image 2025-05-14 at 18.22.20 (1).jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 bg-[#07090F]">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-white mb-4">
            Galerija
          </h2>
          <p className="text-white/45 text-base mb-16">
            Posjetite naše socijalne mreže za više slika sa takmičenja i treninga.
          </p>
        </SectionReveal>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <SectionReveal key={src} delay={i * 0.04}>
              <div
                className="group relative break-inside-avoid overflow-hidden cursor-none"
                onClick={() => setSelected(src)}
              >
                <Image
                  src={src}
                  alt={`Galerija ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#D42020]/0 group-hover:bg-[#D42020]/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-xs font-bold tracking-widest uppercase">
                    Otvori
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Social link */}
        <SectionReveal className="mt-16 text-center">
          <a
            href="https://www.facebook.com/TKDBOSNA/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm text-white/40 hover:text-white transition-colors"
          >
            <FaFacebook className="text-xl" />
            <span>Više slika na Facebook stranici</span>
          </a>
        </SectionReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              <HiX />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full"
            >
              <Image
                src={selected}
                alt="Preview"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}