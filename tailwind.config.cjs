/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                button: "#ff0000",
                // blue: {
                //     450: "#5F99F7",
                // },
                mainBackground: "#c4c4c4",
                background: "#e5e5e5",
                text: "#000",
                footer: "#000",
                textDescription: "#9c9696",
            },
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        spacing: {
            "8xl": "96rem",
            "9xl": "128rem",
        },
        borderRadius: {
            "4xl": "2rem",
        },
        screens: {
            sm: { min: "640px", max: "767px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            md: { min: "768px", max: "1023px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }
            lg: { min: "1024px", max: "1279px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }
            xl: { min: "1280px", max: "1535px" },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }
            "2xl": { min: "1536px" },
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [],
};
