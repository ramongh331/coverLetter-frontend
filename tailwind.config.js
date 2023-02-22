/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1000: '#293241',
        },
        orange: {
          1000: '#EE6C4D',
        },
      }
    },
  },
  plugins: [],
}
