module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // HTTP로 유지
        hostname: 'culture.seoul.go.kr',
        port: '',
        pathname: '/cmmn/file/getImage.do/**',
      },
    ],
    unoptimized: true,
  },
  assetPrefix: "http://letmeknowseoulfestival.life/", // HTTP로 유지
}; 