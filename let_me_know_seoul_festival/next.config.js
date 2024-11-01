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
  assetPrefix:
  process.env.NODE_ENV === "production"
    ? "http://letmeknowseoulfestival.life/"
    : "",
}