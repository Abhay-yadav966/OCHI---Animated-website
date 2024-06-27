/** @type {import('tailwindcss').Config} */

// how to import external font file in tailwind config?

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      NeueMontrealRegular: ["NeueMontrealRegular"],
      SpaceGrotesk:["SpaceGrotesk"]
    }
  },
  plugins: [],
}