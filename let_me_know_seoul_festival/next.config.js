module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // HTTP로 변경
        hostname: 'culture.seoul.go.kr',
        port: '',
        pathname: '/cmmn/file/getImage.do/**',
      },
    ],
    unoptimized: true,
  },
  assetPrefix: "http://letmeknowseoulfestival.life/", // HTTP로 변경
  async redirects() {
    return [
      {
        destination: 'https://letmeknowseoulfestival.life/$1',
        permanent: true,
      }
    ]
  }
};
