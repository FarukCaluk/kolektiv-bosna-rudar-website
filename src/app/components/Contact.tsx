"use client";
import React, { useState } from "react";
import { SMTPClient } from "emailjs";
import Image from "next/image";

const backgroundImage = new URL(
  "../../../public/backgrounds/main-background.png",
  import.meta.url
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target as HTMLFormElement,
        "your_user_id"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          setIsSuccess(true);
          setIsError(false);
        },
        (error: any) => {
          console.log(error.text);
          setIsError(true);
          setIsSuccess(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gray-900 text-white py-16 px-6 sm:px-8 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl aladin-font md:text-7xl font-bold mb-8">
          KONTAKTIRAJTE NAS
        </h1>
        <div className="py-1 mb-10 w-44 sm:w-52 md:w-64 lg:w-80 mx-auto bg-gradient-to-r from-white to-[#ffffff49]" />
        <p className="text-lg sm:text-xl text-white/80 mb-12">
          Imate bilo kakvih pitanja? Slobodno nas kontaktirajte! Tu smo da vam
          pomognemo da pronađete najbolji program za vas.
        </p>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6">Pošaljite nam poruku</h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-[#1c1c1c] p-8 rounded-2xl shadow-lg border border-[#5f5f5f] transition duration-300"
          >
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Vaše ime"
                className="w-full p-4 bg-[#242424] text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5a5a5a] border border-[#424242] hover:border-[#5a5a5a] transition"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Vaš email"
                className="w-full p-4 bg-[#242424] text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#242424] border border-[#424242] hover:border-[#5a5a5a] transition"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Vaša poruka"
                className="w-full p-4 bg-[#242424] border border-[#424242] text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#242424] hover:border-[#5a5a5a] transition h-32"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 cursor-pointer bg-[#302a25] text-white rounded-lg text-xl border border-[#424242] hover:bg-[#333333] transition duration-300"
            >
              Pošaljite
            </button>

            {isSuccess && (
              <p className="mt-4 text-green-500">
                Vaša poruka je uspješno poslana!
              </p>
            )}
            {isError && (
              <p className="mt-4 text-red-500">
                Došlo je do greške, pokušajte ponovo.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
