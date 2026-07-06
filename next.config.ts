import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/laavco-web",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.0.15"]
};

export default nextConfig;
