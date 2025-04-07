/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: '#4338ca', // Matching indigo-700 for brand consistency
      },
    },
  },
  plugins: [],
}