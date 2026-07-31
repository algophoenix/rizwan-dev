
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: '#6366f1',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#06b6d4',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          foreground: '#ffffff',
        },
        muted: 'hsl(var(--muted) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #06b6d4 180deg, #8b5cf6 360deg)',
      },
    },
  },
  plugins: [],
}
// refined spacing scale 2026-02-16
// refined spacing scale 2026-02-27
// refined spacing scale 2026-03-02
// refined spacing scale 2026-03-13
// refined spacing scale 2026-03-17
// refined spacing scale 2026-03-18
// refined spacing scale 2026-03-26
// refined spacing scale 2026-03-27
// refined spacing scale 2026-04-01
// refined spacing scale 2026-04-07
// refined spacing scale 2026-04-08
// refined spacing scale 2026-04-09
// refined spacing scale 2026-04-16
// refined spacing scale 2026-04-17
// refined spacing scale 2026-04-20
// refined spacing scale 2026-05-20
// refined spacing scale 2026-05-26
// refined spacing scale 2026-06-02
// refined spacing scale 2026-06-15
// refined spacing scale 2026-07-17
// refined spacing scale 2026-07-20
// refined spacing scale 2026-07-23
// refined spacing scale 2026-07-31
