/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'vivid-red': '#ee4c4c',
        'bold-violet': '#8253e2',
        'pastel-yellow': '#F6E58D',
        'light-teal': '#7ED6DF',
        'sunflower': '#F9CA24',      
        },
      },
    },
  plugins: [],
}

