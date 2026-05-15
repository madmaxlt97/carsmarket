import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pistonheads.com",
      },
      {
        protocol: "https",
        hostname: "parkers-images.bauersecure.com",
      },
      {
        protocol: "https",
        hostname: "bringatrailer.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dealeraccelerate.com",
      },

      {
        protocol: "https",
        hostname: "hips.hearstapps.com",
      },
      {
        protocol: "https",
        hostname: "cdn.motor1.com",
      },
    ],
  },
};

export default nextConfig;
