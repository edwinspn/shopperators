/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{html,tsx,jsx,js,ts}"
    ],
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
