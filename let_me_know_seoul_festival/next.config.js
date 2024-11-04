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
  async redirects() {
    return [
      {
        source: '/(.*).css', // CSS 파일에 대한 요청만 HTTPS로 리디렉션
        destination: 'https://letmeknowseoulfestival.life/$1.css',
        permanent: true,
      },
    ];
  },
};