/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'pic1' : 'url("https://images.pexels.com/photos/261025/pexels-photo-261025.jpeg")',
        'pic2' : 'url("https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'pic3' : 'url("https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'hurricane' : 'url("https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'hurBefore' : 'url("https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'hurDuring' : 'url("https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      },
      screens: {
        'tablet': '640px',
      }
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
     
      // "light",
      // "dark",  
      {
        mytheme: {

          "primary": "#FFEAA7",

          "secondary": "#00b6a7",

          "accent": "#0065ff",

          "neutral": "#060a18",

          "base-100": "#f5fdff",

          "info": "#00adff",

          "success": "#00d899",

          "warning": "#d9a800",

          "error": "#ff6f8c",
        },
      },
    ],
  },
}

