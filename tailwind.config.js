/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7e22ce",   // 700
          light:  "#a855f7",    // 500
          dark:   "#581c87",    // 800
        },
      },
    },
  },
  plugins: [],
};
