/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-light-black": "#1c1d1c",
        "theme-background-gray": "#f1f2f6",
      },
    },
  },
  plugins: [],
};
