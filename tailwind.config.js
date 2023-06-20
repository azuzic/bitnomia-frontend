/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");
export default {
    content: [
        // Example content paths...
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        createThemes({
            default: {
                BN_BACKGROUND: "#16365E",
                BN_BACKGROUND2: "#12557c",
                BN_BG_WHITE: "#F8F9FD",
                BN_FONT_WHITE: "#D9D9D9",
                BN_FONT: "#3A3B3D",
                BN_FONT_BOLD: "#18191A",
                BN_FONT_BOLD: "#18191A",
                BN_PRIMARY: "#0EB5D9",
            },
        }),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
