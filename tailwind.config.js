/*@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14a359",
        secondary: "#fa8039",
        smoothPrimary: "#70cf97",
        smoothSecondary: "#ffe7d9",
        text: "#263238",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"]
      },
    },
  },
  plugins: [],
}