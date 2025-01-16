import { AppMantineProvider } from '@/app/lib/mantine'
import { AppThemeProvider } from '@/app/lib/themeProvider'

import GoogleAnalytics from '@/app/components/GoogleAnalytics/GoogleAnalytics'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import './styles/globals.css'

export const metadata: Metadata = {
  title: 'portfolio',
  description: "'hody's portfolio site",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const gaId = process.env.GA_ID || ''

  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <GoogleAnalytics />
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
