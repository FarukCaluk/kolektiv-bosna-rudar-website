import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientProviders from "./components/ClientProviders";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kolektiv Bosna Rudar",
  description: "Sportska zajednica posvećena borilačkim vještinama i rekreaciji.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CustomCursor />
        <ClientProviders>
          <div className="relative z-[1]">
            <Navbar />
            <PageTransition>{children}</PageTransition>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
