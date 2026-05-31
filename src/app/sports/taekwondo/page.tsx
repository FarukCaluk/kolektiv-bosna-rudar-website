"use client";
import { motion } from "framer-motion";
import LocationSection from "@/app/components/LocationSection";
import SportGallery from "@/app/components/SportGallery";
import Trainers from "@/app/components/taekwondo/Trainers";
import ApplicationForm from "@/app/components/ApplicationForm";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SectionReveal from "@/app/components/SectionReveal";

const BG = new URL("../../../../public/backgrounds/main-background.png", import.meta.url);

const GALLERY = [
  "/WhatsApp Image 2025-05-12 at 14.07.09.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.09 (1).jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.10 (1).jpeg",
  "/WhatsApp Image 2025-05-12 at 14.13.38.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.11.55.jpeg",
  "/WhatsApp Image 2025-05-12 at 14.07.10 (4).jpeg",
];

export default function TaekwondoPage() {
  return (
    <div className="bg-[#07090F] text-white min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }} />
        <div className="absolute inset-0 bg-[#07090F]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/90 via-[#07090F]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090F] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="block w-8 h-[2px] bg-[#D42020]" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/45">Kolektiv Bosna Rudar</span>
          </motion.div>

          <motion.h1 className="bebas text-[clamp(4rem,12vw,10rem)] leading-none text-white mb-6"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.8)" }}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16,1,0.3,1], delay: 0.15 }}>
            Taekwondo
          </motion.h1>

          <motion.p className="text-white/60 max-w-lg text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}>
            Spoj snage, brzine i strategije – taekwondo koji mijenja život!
            Pridruži se našem kolektivu i postani najbolja verzija sebe.
            Nudimo treninge u mnogim gradovima širom Bosne i Hercegovine.
          </motion.p>

          <motion.button
            onClick={() => document.getElementById("application")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-[#D42020] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#F03535] transition-colors"
            style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            Prijavi se odmah
          </motion.button>
        </div>
      </div>

      <LocationSection locations={["Visoko","Kakanj","Breza","Vareš","Kiseljak"]} />
      <SportGallery images={GALLERY} />
      <Trainers />
      <ApplicationForm defaultSport="taekwondo"
        locations={["Kakanj","Breza","Visoko","Kiseljak","Vareš"]}
        subtitle="Treninzi su dostupni u Visoku, Kaknju, Kiseljaku, Varešu i Brezi. Plaćanje se vrši na račun trenera nakon prijave." />

      {/* Contact strip */}
      <section className="py-16 px-6 border-t border-white/[0.05] bg-[#07090F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 text-sm text-white/40">
          <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#D42020]" /><span>Taekwondo sala — Visoko, Kakanj, Breza, Kiseljak, Vareš</span></div>
          <div className="flex items-center gap-3"><FaPhone className="text-[#D42020]" /><span>061 376 075</span></div>
        </div>
      </section>
    </div>
  );
}