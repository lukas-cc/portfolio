/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        theme: {
          primary: "#67e8f9",

          secondary: "#fde047",

          accent: "#F471B5",

          neutral: "#1E293B",

          "base-100": "#111827",

          info: "#0CA5E9",

          success: "#2DD4BF",

          warning: "#fb923c",

          error: "#FB7085",
        },
      },
    ],
  },
};
