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
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'laptop': {'min': '1023px'},
  
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
      'ocean' : "url(../../public/ocean3.avif)",
      'forest' : "url(../../public/bg.png)",
      'expertise' :"url(../../public/expertise.jpg)",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('taos/plugin')
  ]
}