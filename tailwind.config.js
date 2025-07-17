/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Mode LIGHT
        light: {
          primary: "#3D8D7A",
          secondary: "#B3D8A8",
          text: "#41bc03 ",
          buttons: "#A3D1C6",
          bg: "#d6ffc1"
        },
        
        // Mode DARK
         dark: {
          primary: "#5AB39E",
          secondary: "#3D8D7A",
          text: "#E0E6D1",
          buttons: "#2A6B5C",
          bg: "#121E1B", // Fondo oscuro       // Fondo oscuro
      },
      }
    },
  },
  plugins: [],
}