/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#745EA5", // 700-ish
          light: "#9686BB", // 500‑ish
          dark: "#57467B", // 800‑ish
        },
      },
    },
  },
  plugins: [],
};
