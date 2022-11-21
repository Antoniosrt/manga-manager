/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            maxHeight: {
                '1/2': '50%',
                '3/4': '75%',
                'card-image': 'calc(100% - 4rem)'
            }
        }
    },
    plugins: []
}
