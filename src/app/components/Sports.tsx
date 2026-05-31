"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";

const SPORTS = [
  { n: "01", name: "Taekwondo",     sub: "Korejska borilačka vještina",  desc: "Razvija brzinu, fleksibilnost i preciznost udaraca. Idealna za sve uzraste — od djece do odraslih koji žele samoodbranu i samopouzdanje.", href: "/sports/taekwondo" },
  { n: "02", name: "MMA",           sub: "Mješovite borilačke vještine", desc: "Savršena kombinacija tehnika iz različitih sportova. Postanite svestran borac i testirajte granice snage, agilnosti i vještina.",           href: "/sports/mma" },
  { n: "03", name: "Kickboxing",    sub: "Eksplozivni stand-up",         desc: "Eksplozivni treninzi koji poboljšavaju snagu, kondiciju i tehniku udaraca. Idealan sport za energične ljude svih uzrasta.",                    href: "/sports/kickboxing" },
  { n: "04", name: "Fitness za žene", sub: "Prilagođeni ženski programi", desc: "Posebno prilagođeni treninzi fokusirani na snagu, fleksibilnost i samopouzdanje u sigurnom, podržavajućem okruženju.",                       href: "/sports/women-training" },
];

export default function Sports() {
  return (
    <section id="sports" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#07090F]">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2rem,7vw,5.5rem)] leading-none text-white mb-3 sm:mb-4">
            Sportovi Kolektiva
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mb-10 sm:mb-14 lg:mb-16">
            Četiri discipline. Jedan kolektiv. Pronađite sport koji vas inspiriše i postanite
            najbolja verzija sebe.
          </p>
        </SectionReveal>

        {/* Cards grid — no overflow-hidden so reveal animations aren't clipped */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.04]">
          {SPORTS.map((s, i) => (
            <SectionReveal key={s.n} delay={i * 0.07}>
              <TiltCard className="h-full">
                <Link href={s.href} className="group block h-full bg-[#0C1020] p-6 sm:p-7 lg:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-[#111828]">
                  {/* Faded watermark number */}
                  <span className="bebas absolute top-3 right-4 text-[5rem] sm:text-[6rem] leading-none text-white/[0.04] select-none pointer-events-none">
                    {s.n}
                  </span>
                  {/* Number badge */}
                  <span className="bebas text-[#D42020] text-sm tracking-widest">{s.n}</span>
                  {/* Hover: red left border slides in */}
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D42020] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="mt-3 sm:mt-4 mb-2 sm:mb-3">
                    <h3 className="bebas text-2xl sm:text-3xl text-white leading-none">{s.name}</h3>
                    <p className="text-[#D42020] text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-1">{s.sub}</p>
                  </div>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">{s.desc}</p>

                  <div className="flex items-center gap-2 text-white/30 text-[10px] sm:text-xs font-semibold tracking-widest uppercase group-hover:text-[#D42020] transition-colors duration-300">
                    <span>Saznaj više</span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>→</motion.span>
                  </div>
                </Link>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.35} className="mt-10 sm:mt-14 lg:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-6 sm:pt-8 border-t border-white/[0.06]">
          <p className="text-white/35 text-xs sm:text-sm">
            Sva mjesta i rasporedi treninga dostupni su na stranicama disciplina.
          </p>
          <Link
            href="/membership"
            className="shrink-0 inline-flex items-center gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D42020] text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#F03535] transition-colors"
            style={{ clipPath: "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,0 100%)" }}
          >
            Učlani se danas →
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}