/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  env: {
    GOOGLE_APPS_SCRIPT_API_KEY: process.env.GOOGLE_APPS_SCRIPT_API_KEY,
  },
};

export default nextConfig;
