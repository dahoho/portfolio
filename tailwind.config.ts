import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '.dark'],

  theme: {
    extend: {
      colors: {
        text: '#334155',
        background: '#ffffff',
        card: '#F7FAFC',
        backgroundDark: '#0f172a',
        cardDark: '#1e293b',
        textDark: '#f8fafc',
        border: '#e5e7eb',
        accent: '#38bdf8',
      },
    },
    // Mantineと一致させる https://mantine.dev/styles/responsive/
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
  },
  plugins: [],
} satisfies Config
