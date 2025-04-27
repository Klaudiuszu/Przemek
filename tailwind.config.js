module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        background: "#F8F4E9",
        footerBg: "#E8E1D5", 
        accent: "#6B8F71",
        darkRed: "#5E3023",
        textDark: "#2B2118",
        success: "#4A7C59",
        stone: "#8B8070",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};