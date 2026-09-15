import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES === "true" ? "/rhapsody-investor-deck" : "";

process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
