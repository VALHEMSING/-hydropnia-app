/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class", // ¡Importante para NativeWind!
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          primary: "#B6F9C9",
          secondary: "#B3D8A8",
          text: "#2C5F2D",
          textSecondary: "#5A6E5A",
          buttonPrimary: "#96E8BC",
          buttonText: "#FFFFFF",
          cards: "#FFFFFF",
          bgCard: "#e8e8e8",
          bg: "#F1F7F2", // Fondo claro (opcional)
          divider: "#e9ecef",
          title: "#4CAF50",
          bordes: "#E0E0E0",
        },

        // Dark Mode
        dark: {
          primary: "#204E4A",
          secondary: "#3D8D7A",
          text: "#D0F0C0",
          textSecondary: "#A8C3A3",
          buttonPrimary: "#81C784",
          buttonText: "#1B2E1F",
          bg: "#1B2E1F",
          cards: "#2F4F2F",
          bgCard: "#f3e6e3",
          divider: "#343a40",
          title: "#66BB6A",
          borderShadows: "#2F4F2F88",
        },
      },
    },
  },
  plugins: [],
};
