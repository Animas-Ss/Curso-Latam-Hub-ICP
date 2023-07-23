/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        interno: "inset 0px 5px 8px rgba(0, 0, 0, 0.6)"
      }
    },
  },
  plugins: [],
}

