/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**",
        port: "3000"
      }
    ],
    domains: ["fakestoreapi.com"]
  }
};

module.exports = nextConfig;
