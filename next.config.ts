import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  transpilePackages: [
    "lucide-react",
    "react-day-picker",
    "react-hook-form",
    "next-themes",
  ],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable eslint during production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
