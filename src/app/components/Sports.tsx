"use client";
import Link from "next/link";
import {
  FaRunning,
  FaHandRock,
  FaDumbbell,
  FaUsers,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const backgroundImage = new URL(
  "../../../public/backgrounds/japan-gradient-2.png",
  import.meta.url
);

const sports = [
  {
    name: "Taekwondo",
    icon: <FaRunning className="text-white text-5xl" />,
    description:
      "Korejska borilačka vještina koja razvija brzinu, fleksibilnost i preciznost udaraca. Idealna za sve uzraste! Naučite kako da se branite, razvijate fizičku izdržljivost i izgradite samopouzdanje.",
  },
  {
    name: "MMA",
    icon: <FaHandRock className="text-white text-5xl" />,
    description:
      "Savršena kombinacija tehnika iz različitih borilačkih sportova. Postanite svestran borac i testirajte svoje granice! S MMA-om ćete unaprijediti svoju snagu, agilnost i borilačke vještine.",
  },
  {
    name: "Kickboxing",
    icon: <FaDumbbell className="text-white text-5xl" />,
    description:
      "Eksplozivni treninzi koji poboljšavaju snagu, kondiciju i tehniku udaraca. Idealan sport za energične ljude! Učićete kako da se branite i podignete nivo svoje fizičke spremnosti na viši nivo.",
  },
  {
    name: "Fitness za žene",
    icon: <FaUsers className="text-white text-5xl" />,
    description:
      "Posebno prilagođeni treninzi za žene fokusirani na snagu, fleksibilnost i samopouzdanje! Ovaj program je osmišljen da vam pomogne da postignete svoje fitness ciljeve u sigurnom i podržavajućem okruženju.",
  },
];

export default function Sports() {
  return (
    <div
      id="sports"
      className="w-full min-h-screen bg-gray-900 text-white py-16 px-6 sm:px-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-8xl font-bold mb-8 aladin-font">
          SPORTOVI KOLEKTIVA
        </h1>
        <div className="py-0.5 mb-10 w-44 sm:w-52 md:w-64 lg:w-80 mx-auto bg-gradient-to-r from-white to-[#ffffff49]"></div>
        <p className="text-lg sm:text-xl text-white/80 mb-12">
          Naša ponuda sportova i treninga pruža vam priliku da razvijete svoju
          fizičku izdržljivost, snagu, fleksibilnost i mentalnu disciplinu. U
          svakom treningu ćete se suočiti sa novim izazovima i postići
          neverovatne rezultate. Pridružite nam se u kolektivu i postanite
          najbolja verzija sebe!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-[#242424] p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300 border border-stone-700"
            >
              <div className="mb-4">{sport.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{sport.name}</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                {sport.description}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-12">
          <Link
            href="/membership"
            className="px-4 xs:px-6 py-2 text-white bg-black text-xs xs:text-sm sm:text-base hover:text-black hover:bg-white font-semibold shadow-lg hover:bg-opacity-90 transition text-center"
          >
            Učlanite se
          </Link>
        </div>
        {/* Social Media Links */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://www.facebook.com/TKDBOSNA/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg hover:text-blue-400 transition"
          >
            <FaFacebook className="text-3xl" />
            <span>Pratite nas na Facebooku</span>
          </a>
          <a
            href="https://www.instagram.com/tkdkolektivbosnarudar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg hover:text-pink-400 transition"
          >
            <FaInstagram className="text-3xl" />
            <span>Pratite nas na Instagramu</span>
          </a>
        </div>
      </div>
    </div>
  );
}
