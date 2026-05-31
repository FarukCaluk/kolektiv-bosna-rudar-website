"use client";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

// WebGL canvas loaded client-only — no SSR
const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <ParticleCanvas />
      {children}
    </>
  );
}
