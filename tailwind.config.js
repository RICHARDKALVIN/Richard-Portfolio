/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#0d0d0d",
        card: "#111111",
        primary: "#00eaff",
        accent: "#ff4ecd",
        textLight: "#e6e6e6"
      },fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    outfit: ["Outfit", "sans-serif"],
     }
    }
  },
  plugins: [],
};
