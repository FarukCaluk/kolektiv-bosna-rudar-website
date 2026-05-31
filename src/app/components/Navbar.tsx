"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV = [
  { label: "Pocetna",  href: "/" },
  { label: "Galerija", href: "/gallery" },
  { label: "Novosti",  href: "/blog" },
];

const SPORTS = [
  { label: "Taekwondo",       href: "/sports/taekwondo" },
  { label: "MMA",             href: "/sports/mma" },
  { label: "Kickboxing",      href: "/sports/kickboxing" },
  { label: "Fitness za zene", href: "/sports/women-training" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen]     = useState(false);
  const [drop, setDrop]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : (pathname ?? "").startsWith(href);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#D42020] z-[60]" />

      <header
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07090F]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image src="/logo.png" alt="Kolektiv Bosna Rudar" width={32} height={32}
              className="sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:block bebas text-base sm:text-lg tracking-widest text-white/75 group-hover:text-white transition-colors">
              BOSNA RUDAR
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}
                  className={`relative text-sm font-medium tracking-wide pb-0.5 transition-colors ${
                    isActive(href) ? "text-[#D42020]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                  {isActive(href) && (
                    <motion.span layoutId="nav-ul"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D42020] rounded-full" />
                  )}
                </Link>
              </li>
            ))}

            <li className="relative">
              <button
                onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}
                className={`flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors ${
                  (pathname ?? "").startsWith("/sports") ? "text-[#D42020]" : "text-white/60 hover:text-white"
                }`}
              >
                Sportovi
                <motion.svg animate={{ rotate: drop ? 180 : 0 }} transition={{ duration: 0.18 }}
                  width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 3L5 7L9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </motion.svg>
              </button>

              <AnimatePresence>
                {drop && (
                  <motion.div
                    onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 glass rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
                  >
                    {SPORTS.map(({ label, href }) => (
                      <Link key={href} href={href} onClick={() => setDrop(false)}
                        className={`block px-5 py-3 text-sm border-b border-white/[0.05] last:border-none transition-all ${
                          pathname === href
                            ? "text-[#D42020] bg-[rgba(212,32,32,0.08)]"
                            : "text-white/65 hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/membership"
              className="hidden md:inline-flex items-center px-4 lg:px-5 py-1.5 sm:py-2 text-xs font-bold tracking-widest uppercase bg-[#D42020] text-white hover:bg-[#F03535] transition-colors duration-200"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              Uclani se
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl p-1">
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}
              className="overflow-hidden md:hidden border-t border-white/[0.06] bg-[#07090F]/98"
            >
              <div className="px-5 py-5 flex flex-col gap-0.5">
                {NAV.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setOpen(false)}
                    className={`py-3.5 text-base font-medium border-b border-white/[0.05] transition-colors ${
                      isActive(href) ? "text-[#D42020]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <div className="pt-4">
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">Sportovi</p>
                  {SPORTS.map(({ label, href }) => (
                    <Link key={href} href={href} onClick={() => setOpen(false)}
                      className={`block py-3 text-sm border-b border-white/[0.04] transition-colors ${
                        pathname === href ? "text-[#D42020]" : "text-white/60 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
                <Link href="/membership" onClick={() => setOpen(false)}
                  className="mt-5 text-center py-3.5 text-sm font-bold tracking-widest uppercase bg-[#D42020] text-white hover:bg-[#F03535] transition-colors"
                >
                  Uclani se
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <div className="h-[58px] sm:h-[66px]" aria-hidden="true" />
    </>
  );
}