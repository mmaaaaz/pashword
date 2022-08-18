const withPWA = require("next-pwa");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  pwa: {
    dest: "public",
  },

  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  poweredByHeader: false,

  images: {
    minimumCacheTTL: 84600 * 90, // 90days
  },
});
