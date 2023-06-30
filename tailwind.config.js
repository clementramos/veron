/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "transform: (content) => content.replace(/taos:/g, ''),"
  ],
  
  theme: {
    extend: {
    
      colors: {
        '009999' : '#009999',
        '00FFFF' : '#00FFFF',
        '00CCCC' : '#00CCCC',
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
        'tablet': {'min': '768px', 'max': '1023px'},
  
        'laptop': {'min': '1024px', 'max': '1440px'},

        'laptopL': {'min': '1440px', 'max': '2560px'},

        'laptop4K': {'min': '2560px'},

  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
    backgroundImage: {
      'beach' : "url(../../public/beach-2592454.jpg)",
      'forest' : "url(../../public/bg.png)",
      'expertise' :"url(../../public/expertise.jpg)",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('taos/plugin')
  ]
}