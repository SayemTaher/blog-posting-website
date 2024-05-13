/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ' "Mulish", sans-serif',
      },
      colors: {
        bgPrimary: "#E2E6EB",
        bgSecondary: "#FFFFFF",
        colorGray: "#E6E6E6",
        colorPurple: "#DDD0E6",
        colorOrange: "#FFDDE1",
        colorGreen: "#CCF9EA",
        colorBlue: "#81B5D1",
        colorNavy: "#02011F",
      },
    },
  },
  plugins: [require("daisyui")],
};
