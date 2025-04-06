"use client";
import React, { useState } from "react";

export default function Application() {
  const [formData, setFormData] = useState({
    imePrezime: "",
    email: "",
    lokacija: "",
    tipClana: "odrasla_osoba",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integracija sa email servisom (emailjs, nodemailer, Firebase itd.)
    console.log(formData);
    setIsSuccess(true);
    setIsError(false);
  };

  return (
    <div
      id="application"
      className="w-full min-h-screen bg-gradient-to-b from-neutral-800 to-neutral-900 text-white py-16 px-6 sm:px-8 flex items-center justify-center"
    >
      <div className="max-w-3xl w-full bg-[#1c1c1c] p-10 rounded-2xl shadow-lg border border-[#5f5f5f]">
        <h1 className="text-4xl sm:text-5xl font-bold aladin-font mb-8 text-center">
          Prijava u Klub
        </h1>
        <p className="text-white/80 text-center mb-8 text-lg">
          Treninzi su dostupni u Visoko, Kakanju, Kiseljaku, Varešu i Brezi.
          Mjesečna članarina iznosi{" "}
          <span className="text-main-club-color font-semibold">50 KM</span>.
          <br /> <br /> Plaćanje se vrši na račun trenera nakon prijave.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="imePrezime"
            placeholder="Ime i prezime"
            className="w-full p-4 bg-[#242424] text-white rounded-lg border border-[#424242] focus:ring-2 focus:ring-[#5a5a5a] transition"
            value={formData.imePrezime}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email adresa"
            className="w-full p-4 bg-[#242424] text-white rounded-lg border border-[#424242] focus:ring-2 focus:ring-[#5a5a5a] transition"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            name="lokacija"
            className="w-full p-4 bg-[#242424] cursor-pointer text-white rounded-lg border border-[#424242] focus:ring-2 focus:ring-[#5a5a5a] transition"
            value={formData.lokacija}
            onChange={handleChange}
            required
          >
            <option value="">Odaberi lokaciju</option>
            <option value="kakanj">Kakanj</option>
            <option value="breza">Breza</option>
            <option value="visoko">Visoko</option>
            <option value="kiseljak">Kiseljak</option>
            <option value="vares">Vareš</option>
          </select>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipClana"
                value="odrasla_osoba"
                checked={formData.tipClana === "odrasla_osoba"}
                onChange={handleChange}
              />
              Odrasla osoba
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tipClana"
                value="dijete"
                checked={formData.tipClana === "dijete"}
                onChange={handleChange}
              />
              Dijete (ispod 18 godina)
            </label>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-4 bg-[#302a25] text-white rounded-lg text-xl border border-[#424242] hover:bg-[#333333] transition duration-300"
          >
            Prijavi se
          </button>

          {isSuccess && (
            <p className="mt-4 text-green-500 text-center">
              Prijava uspješno poslana! Javit ćemo vam se uskoro.
            </p>
          )}
          {isError && (
            <p className="mt-4 text-red-500 text-center">
              Došlo je do greške, pokušajte ponovo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
