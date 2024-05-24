/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        starBanner:"url(../dist/img/rewards/xl-hero-desktop_2021.png)",
        sBanner:"url(../dist/img/rewards/hero-mobile_2021.webp)"
      },
      colors:{
        dark:"#2b2b2b",
        light:"#ffffff",
        pula:"#e74737",
        lberde:"#d4e9e2",
      }
    },
  },
  plugins: [],
}