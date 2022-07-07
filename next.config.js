/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST,
    MOBGO_URL: process.env.MOBGO_URL
  }
}

module.exports = nextConfig
