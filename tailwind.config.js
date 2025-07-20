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
        // 🌞 Light Mode
        light: {
          primary: "#A0F8B7", // Verde menta vibrante
          secondary: "#B5DDA4", // Verde suave
          text: "#1F3D2B", // Texto primario oscuro
          textSecondary: "#4F6654", // Texto secundario
          buttonPrimary: "#34D399", // Botón verde brillante
          buttonText: "#FFFFFF",
          cards: "#FFFFFF",
          bgCard: "#F2FDF6", // Fondo suave para tarjetas
          bg: "#F8FFF9", // Fondo general
          divider: "#D1E7DD",
          title: "#1E9D61", // Verde más saturado
          bordes: "#D3E4D1",
        },

        // 🌚 Dark Mode
        dark: {
          primary: "#1E473A", // Verde pino profundo
          secondary: "#63D2A1", // Verde menta saturado
          text: "#CFFFE1", // Texto claro
          textSecondary: "#A8DAB5",
          buttonPrimary: "#34D399", // Mismo verde brillante para botones
          buttonText: "#062B1E",
          bg: "#0A1E1B", // Casi negro con tinte verde
          cards: "#1C3732",
          bgCard: "#10231E",
          divider: "#1F3D2D",
          title: "#7CF9C2", // Verde vibrante para títulos
          borderShadows: "#1C373288",
        },
      },
    },
  },
  plugins: [],
};
