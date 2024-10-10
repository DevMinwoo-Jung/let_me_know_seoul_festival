module.exports = {
  // basePath: '/let_me_know_seoul_festival',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'culture.seoul.go.kr',
        port: '',
        pathname: '/cmmn/file/getImage.do/**',
      },
    ],
  },
  // assetPrefix:
  // process.env.NODE_ENV === "production"
  //   ? "https://devminwoo-jung.github.io/let_me_know_seoul_festival"
  //   : "http://localhost:3000/",
}