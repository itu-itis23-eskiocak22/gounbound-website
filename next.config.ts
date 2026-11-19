import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Her dilin kendi kök düzeni var (app/(tr), app/en); ortak 404 için gerekli.
  experimental: { globalNotFound: true },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.0.155",
    "0.0.0.0",
  ],
};

export default nextConfig;
