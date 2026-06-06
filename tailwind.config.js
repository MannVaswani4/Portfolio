/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    dark: '#131313',
                },
                surface: {
                    DEFAULT: '#131313',
                    dim: '#131313',
                    bright: '#393939',
                    lowest: '#0e0e0e',
                    low: '#1c1b1b',
                    container: '#201f1f',
                    high: '#2a2a2a',
                    highest: '#353534',
                },
                primary: {
                    DEFAULT: '#dbfcff',
                    container: '#00f0ff',
                },
                secondary: {
                    DEFAULT: '#ecb2ff',
                    container: '#cf5cff',
                },
                outline: {
                    DEFAULT: '#849495',
                    variant: '#3b494b',
                },
                on: {
                    surface: '#e5e2e1',
                    'surface-variant': '#b9cacb',
                },
                border: {
                    DEFAULT: 'rgba(132, 148, 149, 0.15)',
                    hover: 'rgba(132, 148, 149, 0.35)',
                    accent: 'rgba(0, 240, 255, 0.3)',
                },
                text: {
                    primary: '#e5e2e1',
                    secondary: '#b9cacb',
                    muted: '#849495',
                },
                accent: {
                    DEFAULT: '#00f0ff',
                    dim: 'rgba(0, 240, 255, 0.15)',
                    glow: 'rgba(0, 240, 255, 0.4)',
                    violet: '#cf5cff',
                }
            },
            fontFamily: {
                sans: ['"Bebas Neue"', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
                display: ['"Bebas Neue"', 'Inter', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.125rem',
                lg: '0.25rem',
                xl: '0.5rem',
                full: '0.75rem',
            },
            spacing: {
                'margin-mobile': '20px',
                gutter: '24px',
                'margin-desktop': '80px',
                unit: '4px',
                'stack-lg': '64px',
                'stack-sm': '16px',
                'stack-md': '32px',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
