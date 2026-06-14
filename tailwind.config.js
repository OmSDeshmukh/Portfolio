/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e0e',
        surface: '#161616',
        border: '#262626',
        muted: '#6b6b6b',
        subtle: '#3a3a3a',
        text: '#e8e8e8',
        dim: '#a0a0a0',
        accent: '#8b7cf8',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
}
