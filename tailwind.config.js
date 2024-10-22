/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#D9D9D9",
        red: "#FF0000",
        black: "#0E0E0E",
        blue: "#0E42FD",
      },
      fontFamily: {
        title: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "main-header-size": "34px",
        "sub-header-size": "20px",
        "card-discription-size": "38px",
        "price-size": "60px",
      },

      fontWeight: {
        "main-header-weight": "700",
        "discription-text-weight": "400",
      },

      boxShadow: {
        customShadow: "0px 5px 8px 0px #D9D9D9",
      },

      backgroundColor: {
        men: "#2BD9AF",
        woman: "#FF5E84",
      },
    },
  },
  plugins: [],
};
