import daisyui from './node_modules/daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem', 
        sm: '1.5rem', 
        md: '2rem',       
        lg: '3rem',         
        xl: '5rem',        
        '2xl': '6rem',      
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Noto Sans Thai'", "sans-serif"], 
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], // Define the themes you want to use
  },
}