// const theme = require('./theme.json')
// const tailpress = require( "@jeffreyvr/tailwindcss-tailpress" )

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './*/*.php',
            './**/*.php',
            './resources/css/*.css',
            './resources/js/*.js',
            './safelist.txt'
        ],
    },
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '0rem'
            },
        },
        extend: {
            colors: {
                blue: {
                    50: '#EFF6FF',
                    100: '#DBEAFE',
                    200: '#BFDBFE',
                    300: '#93C5FD',
                    400: '#39fff1',
                    500: '#30D5C8',
                    600: '#1e8e86',
                    700: '#1D4ED8',
                    800: '#1E40AF',
                    900: '#1E3A8A',
                }
            }
        }
    },
    // plugins: [
    //     tailpress.tailwind
    // ]
};
