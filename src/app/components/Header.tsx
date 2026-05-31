"use client";
import Image from "next/image";
import ClubLogo from "../../../public/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const BG = new URL("../../../public/backgrounds/main-background.png", import.meta.url);

export default function Header() {
  const { scrollY }     = useScroll();
  const bgY             = useTransform(scrollY, [0, 700], ["0%", "28%"]);
  const contentOpacity  = useTransform(scrollY, [0, 380], [1, 0]);
  const contentY        = useTransform(scrollY, [0, 380], [0, -36]);

  useEffect(() => {
    const smooth = (e: Event) => {
      e.preventDefault();
      const a  = e.currentTarget as HTMLAnchorElement;
      const id = a.getAttribute("href")?.substring(1);
      document.getElementById(id ?? "")?.scrollIntoView({ behavior: "smooth" });
    };
    const nodes = document.querySelectorAll<HTMLAnchorElement>("a[href^='#']");
    nodes.forEach(n => n.addEventListener("click", smooth));
    return () => nodes.forEach(n => n.removeEventListener("click", smooth));
  }, []);

  return (
    <div className="relative w-full h-screen min-h-[640px] overflow-hidden noise">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${BG})`, y: bgY }}
      />
      <div className="absolute inset-0 bg-[#07090F]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090F]/90 via-[#07090F]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07090F] to-transparent" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-5 sm:px-10"
      >
        {/* ── Mobile logo (above title, visible on <lg) ── */}
        <motion.div
          className="flex justify-start mb-6 lg:hidden"
          initial={{ opacity: 0, scale: 0.75, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <Image
            src={ClubLogo}
            alt="Kolektiv Bosna Rudar"
            width={90} height={90}
            className="sm:w-[120px] sm:h-[120px] select-none"
            style={{ filter: "drop-shadow(0 0 18px rgba(212,32,32,0.65))" }}
          />
        </motion.div>

        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-5 sm:mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block w-7 sm:w-8 h-[2px] bg-[#D42020] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
              Sportska zajednica · BiH
            </span>
          </motion.div>

          {/* Brand name — clip-path reveal */}
          <motion.h1
            className="aladin-font text-[clamp(3rem,10vw,8rem)] leading-[0.90] font-bold text-white mb-1"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.8)" }}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            KOLEKTIV
          </motion.h1>
          <motion.h1
            className="aladin-font text-[clamp(3rem,10vw,8rem)] leading-[0.90] font-bold text-[#D42020] mb-6 sm:mb-8"
            style={{ textShadow: "0 0 60px rgba(212,32,32,0.4), 0 4px 40px rgba(0,0,0,0.8)" }}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.48 }}
          >
            BOSNA RUDAR
          </motion.h1>

          {/* Body text */}
          <motion.p
            className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md sm:max-w-lg mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            Taekwondo, kickboxing, MMA i fitness za žene — višestruko nagrađivana
            zajednica sa lokacijama u Visokom, Kaknju, Brezi, Kiseljaku i Varešu.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <a
              href="#about"
              className="inline-flex items-center px-6 sm:px-7 py-2.5 sm:py-3 bg-[#D42020] text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#F03535] transition-colors duration-200"
              style={{ clipPath: "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,0 100%)" }}
            >
              Saznaj više
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 sm:px-7 py-2.5 sm:py-3 border border-white/25 text-white text-xs sm:text-sm font-medium tracking-widest uppercase hover:border-white/55 hover:bg-white/[0.05] transition-all duration-200"
            >
              Kontakt
            </a>
          </motion.div>
        </div>

        {/* ── Desktop logo (lg+) — large, right side, clearly visible ── */}
        <motion.div
          className="absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
        >
          <Image
            src={ClubLogo}
            alt="Kolektiv Bosna Rudar"
            width={300} height={300}
            className="xl:w-[360px] xl:h-[360px] select-none"
            style={{
              opacity: 0.75,
              filter: "drop-shadow(0 0 50px rgba(212,32,32,0.55)) drop-shadow(0 0 100px rgba(212,32,32,0.2))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/25">Skrolaj</span>
        <motion.div
          className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-[#D42020] to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          style={{ originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}