/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['"Satoshi"', 'sans-serif'],
      },
      screens: {
        sm: '480px',     
        md: '768px',    
        lg: '1024px',    
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
