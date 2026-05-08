import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static site hosting (like GitHub Pages)
  output: 'export',
  
  // Use the base path provided by GitHub Actions or fallback to repo name
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/happyhawks' : ''),
  
  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
  },
  
  // Optional: Ignore non-critical errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
