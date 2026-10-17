/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060B19', // Primary background
          900: '#080E20', // Secondary / section alternate
          850: '#0B1222', // Card dark base
          800: '#0F172A', // Card slate
          700: '#1E293B', // Border
          600: '#334155',
          500: '#64748B', // Tertiary text
          400: '#94A3B8', // Secondary text
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        emerald: {
          accent: '#10B981',
          hover: '#059669',
          subtle: 'rgba(16, 185, 129, 0.12)',
          glow: 'rgba(16, 185, 129, 0.25)',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px rgba(16, 185, 129, 0.15)',
        'glow-emerald-lg': '0 0 50px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
