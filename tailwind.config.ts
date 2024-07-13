import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    colors: {
      // ORANGE COLORS
      "orange-100": "#E89D6E",
      "orange-200": "#E77754",
      "orange-300": "#E06741",
      "orange-400": "#CF532D",
      // BLUE COLORS
      "blue-100": "#6C86B4",
      "blue-200": "#3D41A0",
      "blue-300": "#193861",
      "blue-400": "#102A4C",
      // GREEN COLORS
      "green-100": "#E8F6A5",
      "green-200": "#D6E97B",
      "green-300": "#BDD358",
      "green-400": "#98AC3A",
      // CYAN COLORS
      "cyan-100": "#94F1F7",
      "cyan-200": "#5ADFE8",
      "cyan-300": "#24C4CF",
      "cyan-400": "#1A8B92",
      // RED COLORS
      "red-100": "#F89393",
      "red-200": "#EF4A4A",
      "red-300": "#CF2424",
      "red-400": "#B31818",

      // YELLOW COLORS
      "yellow-100": "#E0D59C",
      "yellow-200": "#D1C065",
      "yellow-300": "#F5D633",
      "yellow-400": "#DFBF15",

      // GRAY COLORS
      "gray-100": "#EBEBF3",
      "gray-200": "#BBBBBC",
      "gray-300": "#808184",
      "gray-400": "#464B59",

      // WHITE COLORS
      "white": "#FFFFFF",
      "white-200": "#F4F4F4",
      "white-300": "#F7FAFB",

      // BLACK COLORS
      "black-100": "#13181D",
      "black-200": "#EC8583",
    },
  },
};
