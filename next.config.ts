import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — export plain HTML/CSS/JS to `out/` for Cloudflare Pages.
  output: "export",
  // Static export can't use the Next image optimizer; we don't use next/image,
  // but this keeps the door open for plain <img> without a build server.
  images: { unoptimized: true },
};

export default nextConfig;
