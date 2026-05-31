"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const inputCls =
  "w-full bg-transparent border-0 border-b border-white/[0.12] py-3 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#D42020] transition-colors duration-200";
const textaCls =
  "w-full bg-transparent border-0 border-b border-white/[0.12] py-3 text-white placeholder:text-white/25 text-sm outline-none focus:border-[#D42020] transition-colors duration-200 resize-none";

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Dev-time check so you can see exactly what's undefined
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
        { from_name: form.name, from_email: form.email, message: form.message },
        publicKey
      );
      console.log("[EmailJS] OK:", result.text);
      setStatus("sent");
    } catch (err: any) {
      console.error("[EmailJS] Error:", err?.text ?? err?.status ?? err);
      setStatus("error");
    }
  };

  const INFO = [
    { icon: <FaPhoneAlt />,     label: "Telefon", value: "061 933 207" },
    { icon: <FaMapMarkerAlt />, label: "Adresa",  value: "Muhašinovići bb, Visoko, BiH" },
    { icon: <FaEnvelope />,     label: "Email",   value: "taekwondo.klub.bosna@gmail.com" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-[#0C1020]">
      <div className="max-w-7xl mx-auto">

        <SectionReveal>
          <span className="red-line" />
          <h2 className="bebas text-[clamp(2rem,7vw,5.5rem)] leading-none text-white mb-3 sm:mb-4">
            Kontaktirajte nas
          </h2>
          <p className="text-white/45 text-sm sm:text-base mb-12 sm:mb-16 max-w-lg">
            Imate pitanja? Tu smo da vam pomognemo pronaći pravi program.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-16">

          {/* Contact info */}
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-7 sm:gap-10">
              {INFO.map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-5">
                  <div className="mt-0.5 w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center border border-[#D42020]/30 text-[#D42020] text-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 mb-1">{item.label}</p>
                    <p className="text-white/75 text-xs sm:text-sm break-all sm:break-normal">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="h-px bg-white/[0.06]" />
              <p className="text-white/30 text-xs sm:text-sm leading-relaxed">
                Radno vrijeme administracije:<br />Pon – Pet: 09:00 – 18:00
              </p>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal direction="right" delay={0.1} className="lg:col-span-3">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 sm:py-20 gap-3 sm:gap-4 text-center"
              >
                <span className="text-4xl sm:text-5xl">✓</span>
                <p className="bebas text-2xl sm:text-3xl text-white">Poruka poslana!</p>
                <p className="text-white/40 text-xs sm:text-sm">Odgovorićemo vam u najkraćem roku.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-7 sm:gap-8">
                <input
                  type="text" name="name" placeholder="Ime i prezime"
                  value={form.name} onChange={onChange} required
                  disabled={status === "sending"}
                  className={inputCls}
                />
                <input
                  type="email" name="email" placeholder="Email adresa"
                  value={form.email} onChange={onChange} required
                  disabled={status === "sending"}
                  className={inputCls}
                />
                <textarea
                  name="message" placeholder="Vaša poruka..." rows={5}
                  value={form.message} onChange={onChange} required
                  disabled={status === "sending"}
                  className={textaCls}
                />

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
                  {status === "sending" ? "Slanje..." : "Pošaljite poruku"}
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
