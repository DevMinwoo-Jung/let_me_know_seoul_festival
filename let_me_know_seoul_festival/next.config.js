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
        has: [
          {
            type: 'host',
            value: 'letmeknowseoulfestival.life', // Adjust this if you use www or subdomains
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http', // Redirect only if the protocol is HTTP
          },
        ],
        destination: 'http://letmeknowseoulfestival.life/:path*',
        permanent: true,
      },
    ];
  },
};