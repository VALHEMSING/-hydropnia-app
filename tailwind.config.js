/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/views/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // ¡Importante para NativeWind!
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          primary: "#B6F9C9",
          secondary: "#B3D8A8",
          text: "#C9FFE2",
          buttons: "#96E8BC",
          cards: "#7DD181",
          bg: "#4B7F52", // Fondo claro (opcional)
         divider: '#e9ecef',

        },


        // Dark Mode
        dark: {
          primary: "#5B8266",
          secondary: "#3D8D7A",
          text: "#AEF6C7",
          buttons: "#3E6259",
          bg: "#212922",
          cards: "#294936",
          divider: '#343a40'
        },
      },
    },
  },
  plugins: [],
};