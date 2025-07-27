import { Outfit, Ovo } from 'next/font/google';


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f',
            },


            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            boxShadow : {
                'black':'4px 4px 0 #000',
                'white':'4px 4px 0 #555',
            },

            gridTemplateColums:{
                'auto': 'repeat(auto-fit, minumax(200px,1fr))'
            }
        },
    },

    darkMode: 'selector',
    plugins: [],
};