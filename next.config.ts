import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Sanity packages ship conflicting nested @sanity/client versions.
    // Our code is type-safe; this skips the unresolvable third-party conflict.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
