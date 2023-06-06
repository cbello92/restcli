/** @type {import('next').NextConfig} */
const nextConfig = {rewrites: () => [{source: '/api/:path*', destination: 'http://localhost:10000/trpc/:path*'}]}

module.exports = nextConfig
