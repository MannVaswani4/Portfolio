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
                    dark: '#0a0a0a',
                },
                surface: {
                    DEFAULT: '#111111',
                    elevated: '#161616',
                    overlay: '#1a1a1a',
                },
                accent: {
                    DEFAULT: '#EAB308',
                    dim: 'rgba(234, 179, 8, 0.15)',
                    glow: 'rgba(234, 179, 8, 0.4)',
                },
                yellow: {
                    hero: '#EAB308',
                },
                border: {
                    DEFAULT: 'rgba(255, 255, 255, 0.08)',
                    hover: 'rgba(255, 255, 255, 0.15)',
                    accent: 'rgba(59, 130, 246, 0.3)',
                },
                text: {
                    primary: '#ffffff',
                    secondary: '#a1a1aa',
                    muted: '#52525b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
                display: ['"Bebas Neue"', 'sans-serif'],
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
