/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    corePlugins: {
        fontWeight: false
    },
    alphaColors: ['primary', 'dark'],
    theme: {
        fontSize: {
            xs: '.75rem',
            sm: '.8rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        spinner: (theme) => ({
            default: {
                color: theme('colors.primary', 'currentColor'), // color you want to make the spinner
                size: '1em', // size of the spinner (used for both width and height)
                border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
                speed: '500ms' // the speed at which the spinner should rotate
            },
            light: {
                color: theme('colors.white', 'currentColor'), // color you want to make the spinner
                size: '1em', // size of the spinner (used for both width and height)
                border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
                speed: '500ms' // the speed at which the spinner should rotate
            }
        }),
        customForms: (theme) => ({
            default: {
                'input, select': {
                    backgroundColor: theme('colors.white'),
                    '&:focus': {
                        boxShadow: undefined,
                        borderColor: theme('colors.primary')
                    }
                },
                'checkbox, radio': {
                    iconColor: theme('colors.white'),
                    width: theme('spacing.5'),
                    height: theme('spacing.5'),
                    '&:checked': {
                        boxShadow: undefined,
                        borderColor: theme('colors.primary'),
                        backgroundColor: theme('colors.primary')
                    },
                    '&:focus': {
                        borderColor: theme('colors.primary'),
                        boxShadow: undefined
                    }
                },
                checkbox: {}
            }
        }),
        extend: {
            /*
      screens: {
        'dark-mode': { 'raw': '(prefers-color-scheme: dark)' }
      },
      */
            fontFamily: {
                regular: ['VWAGTheSans-Regular', 'sans-serif'],
                light: ['VWAGTheSans-Light', 'sans-serif'],
                bold: ['VWAGTheSans-Bold', 'sans-serif'],
                italic: ['VWAGTheSans-Italic', 'sans-serif'],
                sans: ['VWAGTheSans-Regular', 'sans-serif'],
                serif: ['Playfair Display', 'Georgia', 'Cambria']
            }
        },
        colors: {
            transparent: 'transparent',
            black: '#000000',
            white: '#ffffff',
            primary: '#4068A3',
            secondary: '#006384',
            tertiary: '#35578A',
            dark: '#34393B',
            subtle: '#4C5356',
            grey: '#787b80',
            neutral: '#A8ADB3',
            shadow: '#E2E6E8',
            light: '#EDF0F2',
            danger: '#f8444f',
            warning: '#D8AA00',
            success: '#5ed16a',
            info: '#78bdc4'
        },
        borderColor: (theme) => ({
            ...theme('colors'),
            default: theme('colors.shadow', 'currentColor')
        })
    },
    variants: {
        spinner: ['responsive']
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('tailwindcss-spinner')()
    ]
}
