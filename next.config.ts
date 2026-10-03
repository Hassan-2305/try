import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash's CDN resizes and serves AVIF/WebP itself, so we hand
    // next/image a custom loader instead of re-optimising on the server.
    loader: "custom",
    loaderFile: "./lib/unsplash-loader.ts",
  },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
