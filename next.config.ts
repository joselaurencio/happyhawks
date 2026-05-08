import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for static site hosting (like GitHub Pages)
  output: 'export',
  
  // Replace 'happyhawks' with your repository name if it's different
  // This ensures images and links work correctly on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/happyhawks' : '',
  
  // GitHub Pages doesn't support Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
