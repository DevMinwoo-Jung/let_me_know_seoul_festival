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
  assetPrefix: "http://letmeknowseoulfestival.life/",
  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://letmeknowseoulfestival.life/$1',
        permanent: true,
      },
    ];
  },
};