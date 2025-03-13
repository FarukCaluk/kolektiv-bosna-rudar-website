"use client";
import Image from "next/image";
import Gallery from "../../../public/backgrounds/gallery.png";

const backgroundImage = new URL(
  "../../../public/backgrounds/japan-gradient.png",
  import.meta.url
);

export default function About() {
  return (
    <div
      className="w-full h-screen cursor-default relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Content in the center */}
      <div className="absolute inset-0 flex flex-col text-start items-start justify-center z-20 px-4 sm:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-8xl aladin-font font-semibold text-white">
            O KOLEKTIVU
          </h1>
          <div className="py-1 my-4 w-96 bg-gradient-to-r from-white to-[#ffffff49]"></div>
          <div className="flex">
            <p className="text-pretty text-2xl w-[70%]">
              Želite li naučiti samoobranu? Želite li poboljšati svoju fizičku
              kondiciju? Želite li razviti koordinaciju i samopouzdanje? Ako je
              odgovor da, onda je taekwondo idealan sport za vas! Taekwondo je
              korejska borilačka vještina koja se sastoji od kombinacije udaraca
              nogama, rukama i šakama. <br /> <br /> Osim što je učinkovito
              samoobrambeno sredstvo, taekwondo je i izvrstan način za
              tjelovježbu, razvoj koordinacije i samopouzdanja. Ako tražite
              zanimljiv i izazovan način da poboljšate svoju fizičku i mentalnu
              kondiciju, taekwondo je idealan izbor za vas! Naši treninzi su
              prilagođeni svim uzrastima i razinama vještine. <br /> <br /> Za
              više informacija i prijavu, te mjesečnu članarinu obratite nam se
              na telefon 061 933 207 Dođite i isprobajte taekwondo! Očekujemo
              vas! Muhašinovići bb, Visoko, BiH / FB Taekwondo klub Bosna Visoko
              taekwondo.klub.bosna@gmail.com
            </p>
            <Image src={Gallery} alt="gallery" height={200} width={750} />
          </div>
        </div>
      </div>
    </div>
  );
}
