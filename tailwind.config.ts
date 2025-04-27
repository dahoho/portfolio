import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['selector', '.dark'],

  theme: {
    extend: {
      colors: {
        text: '#23272F',
        background: '#ffffff',
        card: '#F6F7F9',
        backgroundDark: '#23272F',
        cardDark: '#343A46',
        textDark: '#f6f7f9',
        border: '#343A46',
        accent: '#58C4DC',
        gray: '#404756',
        grayDark: '#EBECF0',
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
