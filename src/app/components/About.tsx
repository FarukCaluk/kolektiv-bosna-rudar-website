"use client";
import Image from "next/image";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import GalleryImg from "../../../public/backgrounds/gallery.png";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#0C1020] relative overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(212,32,32,0.07) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Text column */}
          <div>
            <SectionReveal>
              <span className="red-line" />
              <h2 className="bebas text-[clamp(2rem,7vw,5rem)] leading-none text-white mb-5 sm:mb-6">
                O Kolektivu
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                Naš kolektiv nudi vrhunske treninge taekwondoa, kickboxinga, MMA-a i fitnessa —
                sve na jednom mjestu i na više lokacija širom BiH!
              </p>
              <div className="text-white/60 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 space-y-1.5">
                <p>🥋 <strong className="text-white/80">Taekwondo</strong> — razvija disciplinu, snagu i fleksibilnost.</p>
                <p>🥊 <strong className="text-white/80">Kickboxing</strong> — brzina, snaga i strategija.</p>
                <p>🥋 <strong className="text-white/80">MMA</strong> — kombinacija različitih borilačkih vještina.</p>
                <p>💪 <strong className="text-white/80">Fitness za žene</strong> — zdravlje, forma i energija.</p>
              </div>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
                Treninzi su prilagođeni svim uzrastima i nivoima iskustva. Pridruži se zajednici
                koja promoviše zdrav način života, sportski duh i lični napredak.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.18}>
              <div className="flex flex-col gap-2.5 sm:gap-3 mb-7 sm:mb-8">
                {[
                  { icon: <FaPhoneAlt />,    text: "061 933 207" },
                  { icon: <FaMapMarkerAlt />, text: "Muhašinovići bb, Visoko, BiH" },
                  { icon: <FaEnvelope />,    text: "taekwondo.klub.bosna@gmail.com" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/45 text-xs sm:text-sm">
                    <span className="text-[#D42020] shrink-0">{item.icon}</span>
                    <span className="break-all sm:break-normal">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 border border-[#D42020]/40 text-[#D42020] text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-[#D42020] hover:text-white transition-all duration-200"
              >
                Učlani se
              </Link>
            </SectionReveal>
          </div>

          {/* Image column */}
          <SectionReveal direction="right" delay={0.15}>
            <div className="relative">
              <Image
                src={GalleryImg}
                alt="Kolektiv Bosna Rudar"
                width={720} height={500}
                className="w-full object-cover"
                style={{ clipPath: "polygon(0 0,100% 0,100% 90%,0 100%)" }}
              />
              {/* Red corner accent */}
              <div
                className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#D42020]"
                style={{ clipPath: "polygon(100% 0,0 0,100% 100%)" }}
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}