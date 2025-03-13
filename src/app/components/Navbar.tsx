"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const ClubLogo = "/logo.png";
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-club-color font-bold underline decoration-main-club-color underline-offset-[30px]"
      : "hover:text-main-club-color transition-colors duration-200";

  return (
    <div className="sticky top-0 w-full z-50 bg-gradient-to-r from-[#242424] to-[rgba(39,39,39,0.34)] text-white backdrop-blur-md shadow-sm border-b border-opacity-50 border-stone-600">
      <nav className="p-6">
        <div className="flex mx-8 justify-center xl:justify-start items-center">
          <Link className="xl:hidden static" href="/">
          <Image src={ClubLogo} alt="club-logo" height={35} width={35}/>
          </Link>
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl md:hidden"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Main Links for Larger Screens */}
          <ul className="hidden md:flex items-center space-x-10">
            <li className={isActive("/")}>
              <Link href="/">Početna</Link>
            </li>
            <li className={isActive("/sports")}>
              <Link href="/sports">Sportovi</Link>
            </li>
            <li className={isActive("/blog")}>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="mt-4 bg-gradient-to-b from-[#242424] to-[rgba(32,32,32,0.7)] text-white text-center space-y-4 p-4 rounded-lg shadow-xl border border-stone-600 animate-slide-down md:hidden">
            <li className={isActive("/")}>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Početna
              </Link>
            </li>
            <li className={isActive("/sports")}>
              <Link href="/sports" onClick={() => setMenuOpen(false)}>
                Sportovi
              </Link>
            </li>
            <li className={isActive("/blog")}>
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}