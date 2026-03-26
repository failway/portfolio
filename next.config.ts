import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
};

export default nextConfig;
