/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ui-color": "#e6324b",
        "ui-color-2": "#010e1b",
        "ui-color-3": "#1c1d24",
      },
      screens: {
        xs: "356px",
      },
      content: {
        about: 'url("../src/assets/about.svg")',
        portfolio: 'url("../src/assets/portfolio.svg")',
        "contact-us": 'url("../src/assets/contactus.svg")',
      },
      fontFamily: {
        "dancing-script": ['"Dancing Script"'],
        "lobster-two": ['"Lobster Two"'],
        silkscreen: ['"Silkscreen"'],
        barlowcondensed: ['"Barlow Condensed"'],
        poppins: ['"Poppins"'],
      },
    },
  },
  plugins: [],
};
