/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });

    return config;
  },
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
