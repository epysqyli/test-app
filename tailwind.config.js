module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
