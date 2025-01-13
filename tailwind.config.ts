import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#f8fafc',
        background: '#0f172a',
        card: '#1e293b',
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
