"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface Props {
  defaultSport?: string;
  locations?: string[];
  title?: string;
  subtitle?: string;
}

const FEE: Record<string, number> = {
  taekwondo: 40, mma: 50, kickboxing: 50, trening_za_zene: 45,
};

const SPORT_LABELS: Record<string, string> = {
  taekwondo: "Taekwondo", mma: "MMA", kickboxing: "Kickboxing", trening_za_zene: "Fitness za žene",
};

const inputCls =
  "w-full bg-transparent border-0 border-b border-white/[0.12] py-3 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#D42020] transition-colors duration-200";
const selectCls =
  "w-full bg-[#0C1020] border-0 border-b border-white/[0.12] py-3 text-white text-sm outline-none focus:border-[#D42020] transition-colors duration-200";

export default function ApplicationForm({
  defaultSport = "taekwondo",
  locations = ["Kakanj", "Breza", "Visoko", "Kiseljak", "Vareš"],
  title = "Prijava u klub",
  subtitle = "Treninzi su dostupni u Visoku, Kaknju, Kiseljaku, Varešu i Brezi. Plaćanje se vrši na račun trenera nakon prijave.",
}: Props) {
  const [form, setForm] = useState({
    imePrezime: "", email: "", lokacija: "", tipClana: "odrasla_osoba",
    borilackaVjestina: defaultSport,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const fee = FEE[form.borilackaVjestina] ?? 50;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_APPLICATION;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    console.log("[EmailJS] service:", serviceId, "template:", templateId, "key:", publicKey);

    if (!serviceId || !templateId || !publicKey) {
      console.error("[EmailJS] Missing env vars — restart npm run dev after editing .env.local");
      setStatus("error");
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name:  form.imePrezime,
          from_email: form.email,
          lokacija:   form.lokacija || "—",
          sport:      SPORT_LABELS[form.borilackaVjestina] ?? form.borilackaVjestina,
          tip_clana:  form.tipClana === "dijete" ? "Dijete (ispod 18)" : "Odrasla osoba",
          cijena:     `${fee} KM/mj`,
        },
        publicKey
      );
      console.log("[EmailJS] OK:", result.text);
      setStatus("sent");
    } catch (err: any) {
      console.error("[EmailJS] Error:", err?.text ?? err?.status ?? err);
      setStatus("error");
    }
  };

  return (
    <section id="application" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#0C1020]">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2rem,6vw,5rem)] leading-none text-white mb-3 sm:mb-4">{title}</h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-xl mb-10 sm:mb-14 lg:mb-16">{subtitle}</p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* Info panel */}
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 mb-2">
                  Mjesečna članarina
                </p>
                <p className="bebas text-4xl sm:text-5xl text-[#D42020]">{fee} KM</p>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 mb-3">Što dobivate</p>
                {[
                  "Profesionalni treneri",
                  "Fleksibilni rasporedi",
                  "Sve uzraste i nivoe",
                  "Takmičarski programi",
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-2 sm:mb-2.5">
                    <span className="w-1 h-1 rounded-full bg-[#D42020] shrink-0" />
                    <span className="text-white/50 text-xs sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal direction="right" delay={0.1} className="lg:col-span-3">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 sm:py-20 gap-3 text-center"
              >
                <span className="text-4xl sm:text-5xl">✓</span>
                <p className="bebas text-2xl sm:text-3xl text-white">Prijava poslana!</p>
                <p className="text-white/40 text-xs sm:text-sm">Kontaktirat ćemo vas u najkraćem roku.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6 sm:gap-7">
                <input
                  name="imePrezime" type="text" placeholder="Ime i prezime"
                  value={form.imePrezime} onChange={onChange} required
                  disabled={status === "sending"}
                  className={inputCls}
                />
                <input
                  name="email" type="email" placeholder="Email adresa"
                  value={form.email} onChange={onChange} required
                  disabled={status === "sending"}
                  className={inputCls}
                />
                <select
                  name="lokacija" value={form.lokacija} onChange={onChange} required
                  disabled={status === "sending"}
                  className={selectCls}
                >
                  <option value="">Odaberi lokaciju</option>
                  {locations.map(l => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
                <select
                  name="borilackaVjestina" value={form.borilackaVjestina} onChange={onChange}
                  disabled={status === "sending"}
                  className={selectCls}
                >
                  <option value="taekwondo">Taekwondo — 40 KM/mj</option>
                  <option value="mma">MMA — 50 KM/mj</option>
                  <option value="kickboxing">Kickboxing — 50 KM/mj</option>
                  <option value="trening_za_zene">Fitness za žene — 45 KM/mj</option>
                </select>

                <div className="flex flex-wrap gap-4 sm:gap-6 pt-1">
                  {[
                    ["odrasla_osoba", "Odrasla osoba"],
                    ["dijete", "Dijete (ispod 18)"],
                  ].map(([val, label]) => (
                    <label key={val} className="flex items-center gap-2 text-xs sm:text-sm text-white/50">
                      <input
                        type="radio" name="tipClana" value={val}
                        checked={form.tipClana === val} onChange={onChange}
                        className="accent-[#D42020]"
                      />
                      {label}
                    </label>
                  ))}
                </div>

                {status === "error" && (
                  <p className="text-[#D42020] text-xs">
                    Greška pri slanju. Provjerite internet vezu i pokušajte ponovo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="self-start mt-1 px-8 sm:px-10 py-3 sm:py-4 bg-[#D42020] text-white text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#F03535]"
                  style={{ clipPath: "polygon(0 0,calc(100% - 9px) 0,100% 9px,100% 100%,0 100%)" }}
                >
                  {status === "sending" ? "Slanje..." : "Prijavi se"}
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
