"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LocationSection from "@/app/components/LocationSection";
import ApplicationForm from "@/app/components/ApplicationForm";
import SectionReveal from "@/app/components/SectionReveal";
import { FaMapMarkerAlt, FaPhone, FaDumbbell } from "react-icons/fa";

const BG = new URL("../../../../public/backgrounds/main-background.png", import.meta.url);

const BENEFITS = [
  "Treninge vodi certificirana trenerica sa iskustvom",
  "Poboljšajte kondiciju i fizičku snagu",
  "Prilagođeno svim nivoima fizičke spremnosti",
  "Pozitivna, motivirajuća atmosfera",
];

export default function WomensTrainingPage() {
  return (
    <div className="bg-[#07090F] text-white min-h-screen">

      {/* Hero */}
      <div className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }} />
        <div className="absolute inset-0 bg-[#07090F]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/90 via-[#07090F]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090F] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span className="block w-8 h-[2px] bg-[#D42020]" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/45">Kolektiv Bosna Rudar</span>
          </motion.div>
          <motion.h1 className="bebas text-[clamp(3.5rem,10vw,8rem)] leading-none text-white mb-6"
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16,1,0.3,1], delay: 0.15 }}>
            Fitness<br />za žene
          </motion.h1>
          <motion.p className="text-white/60 max-w-lg text-base leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}>
            Otkrijte snagu i energiju kroz treninge prilagođene ženama,
            uz vrhunsku podršku i motivaciju u sigurnom okruženju.
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

      <LocationSection locations={["Kakanj","Visoko"]} />

      {/* Benefits */}
      <section className="py-24 px-6 bg-[#0C1020]">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <span className="red-line" />
            <h2 className="bebas text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-12">
              Zašto odabrati naše treninge?
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((b, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 p-6 bg-[#07090F] border border-white/[0.05] hover:border-[#D42020]/25 transition-colors duration-300 group">
                  <div className="mt-1 w-8 h-8 shrink-0 flex items-center justify-center border border-[#D42020]/30 group-hover:border-[#D42020] transition-colors">
                    <FaDumbbell className="text-[#D42020] text-xs" />
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">{b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo */}
      <section className="px-6 pb-0 bg-[#07090F]">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="relative h-[400px] overflow-hidden">
              <Image src="/women-training.jpg" alt="Fitness za žene" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent" />
            </div>
          </SectionReveal>
        </div>
      </section>

      <ApplicationForm defaultSport="trening_za_zene"
        locations={["Kakanj","Visoko"]}
        title="Prijava — Fitness za žene"
        subtitle="Treninzi su dostupni u Kaknju i Visoku. Plaćanje se vrši na račun trenera nakon prijave." />

      <section className="py-16 px-6 border-t border-white/[0.05] bg-[#07090F]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-8 text-sm text-white/40">
          <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#D42020]" /><span>TKD Sala Rudar Kakanj · Fitness centar Bosna, Visoko</span></div>
          <div className="flex items-center gap-3"><FaPhone className="text-[#D42020]" /><span>060 300 2730 · 062 169 429</span></div>
        </div>
      </section>
    </div>
  );
}