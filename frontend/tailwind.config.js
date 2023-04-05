/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        black: "#000000",
        primaryColor_blueWhite: "#E1FBFC",
        primaryColor_lightTurquoise: "#5CE1E6",
        primaryColor_turquoise: "#00C2CB",
        primaryColor_darkTurquoise: "#03989E",
        primaryColor_lightBlue: "#87ECF2",
        secondaryColor_lilac: "#F9D2FF",
        secondaryColor_purple: "#E1B4F6",
        secondaryColor_darkPurple: "#9D7DE1",
        secondaryColor_lightLilac: "#E3BAF6",
        SemanticColor_blue: "#0077B2",
        SemanticColor_yellow: "#F2B200",
        SemanticColor_green: "#008A27",
        SemanticColor_red: "#E00000",
        neutralColor_grayDarkest: "#303233",
        neutralColor_grayDark: "#6D7173",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        clashDisplay: ["ClashDisplay-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
