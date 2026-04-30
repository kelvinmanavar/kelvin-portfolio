import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // UNCOMMENT the line below and replace 'kelvin-portfolio' with your exact GitHub repo name if it's not a user-level page
  basePath: '/kelvin-portfolio', 
};

export default nextConfig;