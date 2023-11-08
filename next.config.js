/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.strengthlevel.com'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
};

module.exports = nextConfig;
