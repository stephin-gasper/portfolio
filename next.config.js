const { withHeadlessConfig } = require("@headstartwp/next/config");
const headlessConfig = require("./headless.config");

/**
 * Update whatever you need within the nextConfig object.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    /**
     * Critical: prevents " ⨯ ./node_modules/canvas/build/Release/canvas.node
     * Module parse failed: Unexpected character '�' (1:0)" error
     */
    config.resolve.alias.canvas = false;

    // You may not need this, it's just to support moduleResolution: 'node16'
    config.resolve.extensionAlias = {
      ".js": [".js", ".ts", ".tsx"],
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gistcdn.githack.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/stephin-gasper/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  optimizeFonts: false,
};

module.exports = withHeadlessConfig(nextConfig, headlessConfig);
