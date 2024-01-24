/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: { 400: "#72A2F9", 500: "#194CA6" },
        mainBege: { 500: "#F7F4EC" },
        mainOrange: { 500: "#E38633" },
        success: { 500: "#68C85E" },
        danger: { 500: "#DA4A50" },
      },
      boxShadow: {
        page: "3px 3px 0 0 rgba(0, 0, 0, 1)",
        container: "2px 2px 0 0 rgba(0, 0, 0, 1)",
        btn: "1px 1px 0 0 rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
