module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pewter-blue": "#9FB4BC",
        "dark-pewter-blue": "#85A3AD",
        "ming": "#407076",
        "gainsboro": "#DBE3E6",
        "light-gray": "#CFDADE",
        "silver-sand": "#C2D1D6"
      },
      animation: {
        "show-up": "appear 300ms ease-out 1",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0.1 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
