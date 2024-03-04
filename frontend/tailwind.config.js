/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightsteelblue: '#b0c4de',
      },
      animation: {
        fastpulse: 'pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'tuphanda' : 'url("https://res.cloudinary.com/dtrr0ihcb/image/upload/v1708592785/TUPHANDA_ASSETS/TUP_1_si0mrc.png")',
        'tup-logo': 'url("https://res.cloudinary.com/dtrr0ihcb/image/upload/v1708592252/TUPHANDA_ASSETS/TUP-LOGO_b9srve.png")',
        'pic1' : 'url("https://images.pexels.com/photos/261025/pexels-photo-261025.jpeg")',
        'pic2' : 'url("https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'pic3' : 'url("https://images.pexels.com/photos/726478/pexels-photo-726478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'hurricane' : 'url("https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'hurBefore' : 'url("https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'hurDuring' : 'url("https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'hurAfter' : 'url("https://images.pexels.com/photos/4170461/pexels-photo-4170461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'fire' : 'url("https://images.unsplash.com/photo-1489176876421-3b720db0fb3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'fireBefore' : 'url("https://images.pexels.com/photos/7425340/pexels-photo-7425340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'fireDuring' : 'url("https://images.pexels.com/photos/14984476/pexels-photo-14984476/free-photo-of-fire-truck-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'fireAfter' : 'url("https://plus.unsplash.com/premium_photo-1664303474269-a186b1eb1ce3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'earthquake' : 'url("https://images.unsplash.com/photo-1635068741358-ab1b9813623f?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'earthBefore' : 'url("https://images.pexels.com/photos/11028905/pexels-photo-11028905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'earthDuring' : 'url("https://plus.unsplash.com/premium_photo-1695914233513-6f9ca230abdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        'earthAfter' : 'url("https://images.unsplash.com/photo-1619719341796-44c4d2e0eb5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      },
      screens: {
        'tablet': '640px',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Inter' : ['Inter', 'sans-serif'],
        'Noto' : [ "Noto Sans Display", 'sans-serif'],
        'Micro' : ["Micro 5", 'sans-serif'],
      }
    },
  },

  plugins: [ require('@tailwindcss/forms'), require("daisyui")],
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
})
