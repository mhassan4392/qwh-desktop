module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee3939",
        "primary-light": "#ff8d8d",
        secondary: "#4080ff",
        "secondary-light": "#90f0ff",
        light: "#9aa4c2",
        lighter: "#ebeefd",
        lighten: "#87ceeb",
        "common-bg": "#f7f9fe",
        "light-bg": "#f9f9f9",
        dark: "#34354f",
        "dark-light": "#2b2d40",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
