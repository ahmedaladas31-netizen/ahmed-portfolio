/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF5',
        ink: '#111111',
        yellow: '#FFE600',
        pink: '#FF5CA8',
        cyan: '#18E0C8',
        blue: '#2F6BFF',
        orange: '#FF7A1A',
        lime: '#C7F23C',
        violet: '#B388FF',
      },
      fontFamily: {
        display: ['Changa', 'system-ui', 'sans-serif'],
        body: ['Tajawal', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        brutal: '6px 6px 0 #111111',
        'brutal-sm': '4px 4px 0 #111111',
        'brutal-lg': '10px 10px 0 #111111',
        'brutal-pink': '6px 6px 0 #FF5CA8',
        'brutal-cyan': '6px 6px 0 #18E0C8',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9) rotate(-3deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(0)', opacity: '1' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
        rise: 'rise .7s cubic-bezier(.2,.8,.2,1) both',
        pop: 'pop .5s cubic-bezier(.2,.8,.2,1) both',
        wiggle: 'wiggle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
