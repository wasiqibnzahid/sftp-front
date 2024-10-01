/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      primaryBlue: "#167EEf",
      primaryGrey: "#252525",
      primaryWhite: "#FFFF",
      paragraphGrey: "#393939",
      correctGreen: "#0c6e0e",
      resposeGrey: "#E5E9EC",
      inputActive: "#3578BE",
      alertRed: "#D81933",
      black: "#000",
    },
  },
  plugins: [],
};
