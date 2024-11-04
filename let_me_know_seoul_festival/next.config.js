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
        source: '/secure/:path*', // 예를 들어, 특정 경로에서만 HTTPS를 사용하도록 설정
        has: [
          {
            type: 'host',
            value: 'letmeknowseoulfestival.life',
          },
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://letmeknowseoulfestival.life/secure/:path*', // 특정 경로만 HTTPS로 리디렉션
        permanent: true,
      },
    ];
  },
};
