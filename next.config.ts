import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: isGithubActions ? "export" : undefined,
  basePath: isGithubActions ? "/laavco-web" : undefined,
  images: {
    unoptimized: isGithubActions ? true : undefined,
  },
  trailingSlash: true,
  allowedDevOrigins: ["192.168.0.15"]
};

export default nextConfig;
