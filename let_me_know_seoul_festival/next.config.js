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
  
  assetPrefix: process.env.NODE_ENV === "production" ? "https://letmeknowseoulfestival.life/" : "",
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://openapi.seoul.go.kr:8088/48504d46446d696e373365494c7848/json/culturalEventInfo/:path*',
      },
    ];
  },
};