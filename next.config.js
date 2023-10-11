/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Enable topLevelAwait for both client and server bundles
    if (isServer) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
    }

    return config;
  },
  images: {
    // Enable unoptimized images
    disableStaticImages: true,
    domains: [], // Add allowed image domains if necessary
  },
};

module.exports = nextConfig;