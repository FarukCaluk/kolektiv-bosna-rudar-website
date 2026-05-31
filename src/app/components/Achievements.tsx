"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface StatProps { icon: string; to: number; suffix: string; label: string; delay: number; }

function Stat({ icon, to, suffix, label, delay }: StatProps) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count  = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const c = animate(count, to, { duration: 1.8, delay, ease: "easeOut" });
    return c.stop;
  }, [inView, count, to, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-6 sm:py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{icon}</div>
      <div className="bebas text-[clamp(2.8rem,7vw,5.5rem)] leading-none text-white">
        <motion.span>{rounded}</motion.span>
        <span className="text-[#D42020]">{suffix}</span>
      </div>
      <div className="mt-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/35">
        {label}
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="relative py-0 px-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,32,32,0.06) 0%, transparent 70%)" }}
      />
      <div className="relative max-w-4xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
          <Stat icon="🥋" to={500} suffix="+" label="Polaznika" delay={0}    />
          <Stat icon="🏆" to={50}  suffix="+" label="Trofeja"   delay={0.12} />
          <Stat icon="⚡" to={4}   suffix=""  label="Sporta"    delay={0.24} />
        </div>
      </div>
    </section>
  );
}