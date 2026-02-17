/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: {
                    dark: '#0f172a',
                    light: '#f8fafc',
                },
                editor: {
                    dark: '#020617',
                    light: '#ffffff',
                }
            }
        },
    },
    plugins: [],
}
