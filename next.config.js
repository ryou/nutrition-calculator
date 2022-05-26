/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  eslint: {
    dirs: ['src', 'backend', 'shared'],
  },
}

module.exports = nextConfig
