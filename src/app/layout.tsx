import { AppMantineProvider } from '@/app/lib/mantine'
import { AppThemeProvider } from '@/app/lib/themeProvider'

import GoogleAnalytics from '@/app/components/GoogleAnalytics/GoogleAnalytics'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Suspense } from 'react'
import './styles/globals.css'

// Noto Sans JP フォントの設定
const noto = Noto_Sans_JP({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'portfolio',
  description: 'hodii portfolio site',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ColorSchemeScript />
      </head>
      <body
        className={`${noto.className} bg-background dark:bg-backgroundDark text-text dark:text-textDark text-sm`}
      >
        <AppThemeProvider>
          <AppMantineProvider>{children}</AppMantineProvider>
        </AppThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
