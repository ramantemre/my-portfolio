/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    };
  },
  assetPrefix: !debug ? "/my-portfolio/out/" : "",
};

module.exports = nextConfig;
