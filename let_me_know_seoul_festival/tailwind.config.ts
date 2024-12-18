import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        'search': '420px',
        'laptop': '1224px',
        'desktop': '1480px',
        'bigDesktop': '1880px',
      },
      height:{
        'detailPage': '75vh',
        'maingPage':  '1640px'
      },
      lineHeight: {
        'imgLineHeight': '50px'
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
          
        'bigDesktop': '1880px',
        // => @media (min-width: 1680px) { ... }
        'mobile': '320px'
      },
    },
    fontFamily: {
      NotoSansKR: ['NotoSansKR'],
    },
  },
  plugins: [],
};
export default config;
