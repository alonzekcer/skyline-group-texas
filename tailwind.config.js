export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0c1230',
                gold: '#f5c451',
            },
            fontFamily: {
                'assistant': ['Assistant', 'sans-serif'],
                'rubik': ['Rubik', 'sans-serif'],
            },
            animation: {
                'glow': 'pulse-glow 3s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'marquee': 'marquee-scroll 40s linear infinite',
                'marquee-left': 'marquee-scroll-left 60s linear infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%': { boxShadow: '0 0 0 0 rgba(245, 196, 81, 0.4)' },
                    '70%': { boxShadow: '0 0 0 20px rgba(245, 196, 81, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(245, 196, 81, 0)' },
                },
                'fadeInUp': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'marquee-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(50%)' },
                },
                'marquee-scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(50%)' },
                },
            },
            boxShadow: {
                '3xl': '0 50px 100px -20px rgba(12, 18, 48, 0.25)',
            }
        },
    },
    plugins: [],
}
