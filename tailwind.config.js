/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#745EA5", 
          light: "#9686BB",
          dark: "#57467B", 
        },
      },
    },
  },
  plugins: [],
};
