/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: { 500: "#194CA6" },
        mainBege: { 500: "#F7F4EC" },
        mainOrange: { 500: "#E38633" },
        success: { 500: "#68C85E" },
      },
      boxShadow: {
        page: "3px 3px 0 0 rgba(0, 0, 0, 1)",
        container: "4px 4px 0 0 rgba(0, 0, 0, 1)",
        btn: "1px 1px 0 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
