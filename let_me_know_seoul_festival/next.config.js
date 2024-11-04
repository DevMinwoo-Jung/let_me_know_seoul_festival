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
  assetPrefix: "https://letmeknowseoulfestival.life/",
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://letmeknowseoulfestival.life/:path*',
        permanent: true,
      },
    ];
  },
};