import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.0.155",
    "0.0.0.0",
  ],
};

export default nextConfig;
