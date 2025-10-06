import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['tile.openstreetmap.org'],
  },
  transpilePackages: ['react-leaflet'],
  typescript : {
    ignoreBuildErrors : true
  },
};

export default nextConfig;
