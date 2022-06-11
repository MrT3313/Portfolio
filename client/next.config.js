/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.unsplash.com']
  },
  env: {
    UPSPLASH_ACCESS_KEY: process.env.UPSPLASH_ACCESS_KEY,
    UPSPLASH_SECRET_KEY: process.env.UPSPLASH_SECRET_KEY,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
