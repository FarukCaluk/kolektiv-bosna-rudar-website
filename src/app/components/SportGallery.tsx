"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import SectionReveal from "./SectionReveal";

interface Props { images: string[]; title?: string; }

export default function SportGallery({ images, title = "Galerija" }: Props) {
  const [current, setCurrent]   = useState(0);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#07090F]">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2rem,6vw,5rem)] leading-none text-white mb-8 sm:mb-10 lg:mb-12">
            {title}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {/* Main image */}
          <div
            className="relative w-full h-[220px] sm:h-[380px] md:h-[480px] overflow-hidden mb-3 sm:mb-4 group"
            onClick={() => setLightbox(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <Image src={images[current]} alt={`${title} ${current + 1}`} fill className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/15 transition-colors duration-300 flex items-end justify-end p-3 sm:p-5">
              <span className="text-white/0 group-hover:text-white/60 text-[10px] sm:text-xs font-semibold tracking-widest uppercase transition-colors">
                Klikni za prikaz
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {images.map((img, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`relative w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 overflow-hidden shrink-0 transition-all duration-200 border-2 ${
                  i === current ? "border-[#D42020]" : "border-transparent opacity-45 hover:opacity-75"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(false)}
          >
            <button onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white text-xl sm:text-2xl p-2">
              <HiX />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              transition={{ duration: 0.22 }} onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh]">
              <Image src={images[current]} alt="" width={1200} height={800}
                className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}