/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "contact-us": "url('/assets/civil.png')",
      },
      backgroundSize: {
        16: "75%",
      },
      animation: {
        "my-text": "my-text 1s linear",
        "my-images": "my-images 1s linear",
      },
      keyframes: {
        "my-text": {
          "0%": {
            transform: "translateX(-100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
        "my-images": {
          "0%": {
            transform: "translateX(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: "1",
          },
        },
      },
      colors: {
        header: "#333333",
        purple: "#7e5bef",
        pink: "#ff49db",
        lightbrown: "#FFF2E6",
        green: "#1D4645",
        lightgreen: "#245856",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        gray: "#696F79",
        blueblack: "#131B42",
      },
      fontFamily: {
        commissioner: ["Commissioner", "sans-serif"],
      },
    },
  },
  plugins: [],
};
