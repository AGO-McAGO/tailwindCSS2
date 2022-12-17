/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontSize: {
        mammoth: "5rem"
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
        }
      }
    },
  },
  plugins: [],
}