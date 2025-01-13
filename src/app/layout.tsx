import '@mantine/core/styles.css'
import type { Metadata } from 'next'

import './styles/globals.css'

import { AppMantineProvider } from '@/app/lib/mantine'
import { AppThemeProvider } from '@/app/lib/themeProvider'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'

export const metadata: Metadata = {
  title: 'portfolio',
  description: "'hody's portfolio site",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-background dark:bg-backgroundDark text-text dark:text-textDark text-sm">
        <AppThemeProvider>
          <AppMantineProvider>{children}</AppMantineProvider>
        </AppThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
