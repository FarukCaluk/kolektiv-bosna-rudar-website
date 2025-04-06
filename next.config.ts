import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔇 Ovo isključuje ESLint errors na Vercelu
  },
  /* config options here */
};

export default nextConfig;
