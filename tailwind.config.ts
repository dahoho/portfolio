import typography from '@tailwindcss/typography'
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
        text: '#2B2C2C',
        background: '#ffffff',
        card: '#EDF2F6',
        backgroundDark: '#030712',
        cardDark: '#1C202A',
        textDark: '#f8fafc',
        border: '#e5e7eb',
        accent: '#38bdf8',
        link: '#2B7FFF',
        gray: '#98A1AE',
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
  plugins: [typography],
} satisfies Config
