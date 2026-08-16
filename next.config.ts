import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
