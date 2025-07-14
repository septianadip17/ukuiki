// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: {
          DEFAULT: "#745EA5",
          light: "#9686BB",
          dark: "#57467B",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
