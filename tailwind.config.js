/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C62828",
        background: "#FAE5C3",
        footerBg: "#F6EBE7",
        accent: "#FA8C3C",
        darkRed: "#9E2A2B",
        textDark: "#4F1D00",
        success: "#2E7D32",
      },
      fontSize: {
        heading: "36px",
        subheading: "24px",
        body: "1rem", // 16px
      },
    },
  },
  plugins: [],
};
