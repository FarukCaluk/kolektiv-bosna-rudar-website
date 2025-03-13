"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const ClubLogo = "/logo.png";
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sportsPages = [
    { name: "Taekwondo", path: "/sports/taekwondo" },
    { name: "MMA", path: "/sports/mma" },
    { name: "Kickboxing", path: "/sports/kickboxing" },
    { name: "Trening za žene", path: "/sports/women-training" },
  ];

  const isActive = (path: string) =>
    pathname === path || (path === "/sports" && pathname.startsWith("/sports"))
      ? "text-main-club-color font-bold underline decoration-main-club-color underline-offset-[30px]"
      : "hover:text-main-club-color transition-colors duration-200";

  const isSportActive = pathname.startsWith("/sports");

  return (
    <div className="sticky top-0 w-full z-50 bg-gradient-to-r from-[#242424] to-[rgba(39,39,39,0.34)] text-white backdrop-blur-md shadow-sm border-b border-opacity-50 border-stone-600">
      <nav className="p-6">
        <div className="flex mx-8 justify-between items-center">
          {/* Logo */}
          <Link className="xl:hidden static cursor-pointer" href="/">
            <Image src={ClubLogo} alt="club-logo" height={35} width={35} />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl md:hidden cursor-pointer"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Main Links for Larger Screens */}
          <ul className="hidden md:flex items-center space-x-10">
            <li className={`${isActive("/")}`}>
              <Link href="/" className="cursor-pointer">
                Početna
              </Link>
            </li>

            {/* Sports Dropdown */}
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  isSportActive ? "text-main-club-color font-bold underline decoration-main-club-color underline-offset-[30px]" : "hover:text-main-club-color"
                }`}
              >
                Sportovi
                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : "hover:-translate-y-1"
                  }`}
                />
              </button>

              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-[#2b2b2b] shadow-lg rounded-lg overflow-hidden border border-stone-600">
                  {sportsPages.map((sport) => (
                    <li key={sport.path} className="border-b border-stone-700 last:border-none">
                      <Link
                        href={sport.path}
                        onClick={() => setDropdownOpen(false)}
                        className={`block px-4 py-2 transition ${
                          pathname === sport.path ? "text-main-club-color font-bold" : "hover:bg-main-club-color hover:text-white"
                        } cursor-pointer`}
                      >
                        {sport.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className={isActive("/blog")}>
              <Link href="/blog" className="cursor-pointer">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="mt-4 bg-gradient-to-b from-[#242424] to-[rgba(32,32,32,0.7)] text-white text-center space-y-4 p-4 rounded-lg shadow-xl border border-stone-600 animate-slide-down md:hidden">
            <li className={isActive("/")}>
              <Link href="/" onClick={() => setMenuOpen(false)} className="cursor-pointer">
                Početna
              </Link>
            </li>

            {/* Mobile Sports Dropdown */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex justify-center items-center gap-2 text-white hover:text-main-club-color transition cursor-pointer"
              >
                Sportovi
                <FaChevronDown
                  className={`text-sm transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : "hover:-translate-y-1"
                  }`}
                />
              </button>
              {dropdownOpen && (
                <ul className="mt-2 space-y-2 bg-[#2b2b2b] p-2 rounded-lg border border-stone-600">
                  {sportsPages.map((sport) => (
                    <li key={sport.path}>
                      <Link
                        href={sport.path}
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(false);
                        }}
                        className={`block px-4 py-2 transition ${
                          pathname === sport.path ? "text-main-club-color font-bold" : "hover:bg-main-club-color hover:text-white"
                        } cursor-pointer`}
                      >
                        {sport.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className={isActive("/blog")}>
              <Link href="/blog" onClick={() => setMenuOpen(false)} className="cursor-pointer">
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
