/** 
 * @type {import('next').NextConfig} 
 */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'culture.seoul.go.kr',
        port: '',
        pathname: '/cmmn/file/getImage.do/**',
      },
    ],
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production"
    ? "https://letmeknowseoulfestival.life/"
    : "",
  async redirects() {
    return [
      {
        source: '/(.*)', 
        destination : process.env.NODE_ENV === "production" ? 'https://letmeknowseoulfestival.life/$1' : "https://localhost:3000",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://openapi.seoul.go.kr:8088/:path*', // Proxy API requests
      },
    ];
  },
};