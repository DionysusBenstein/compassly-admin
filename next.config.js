/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  useFileSystemPublicRoutes: true,
  trailingSlash: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    BLUR_IMAGE: process.env.BLUR_IMAGE,
  },
};
