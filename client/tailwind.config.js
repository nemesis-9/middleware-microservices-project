/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9f15f5', 
        secondary: '#e1d8e7',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

