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
};

module.exports = withHeadlessConfig(nextConfig, headlessConfig);
