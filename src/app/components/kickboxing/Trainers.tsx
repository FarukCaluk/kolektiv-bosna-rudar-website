"use client";
import Image from "next/image";
import SectionReveal from "@/app/components/SectionReveal";

const TRAINERS = [
  { name: "Birnas Karamović", image: "/trainers/WhatsApp Image 2025-05-14 at 17.18.29.jpeg", dan: "", title: "Kickboxing Trainer" },
];

export default function Trainers() {
  return (
    <section className="py-24 px-6 bg-[#0C1020]">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2.5rem,6vw,5rem)] leading-none text-white mb-12">Trener</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRAINERS.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.07}>
              <div className="group relative overflow-hidden bg-[#07090F] border border-white/[0.05] hover:border-[#D42020]/30 transition-colors duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090F] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <span className="red-line" style={{ marginBottom: "0.75rem" }} />
                  <h3 className="bebas text-2xl text-white leading-tight">{t.name}</h3>
                  <span className="text-white/40 text-xs uppercase tracking-wider">{t.title}</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}