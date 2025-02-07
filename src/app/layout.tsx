import { GoogleAnalytics } from '@/components/GoogleAnalytics/_containers'
import { SITE_NAME } from '@/constants'
import { AppMantineProvider } from '@/lib/mantine'
import { AppThemeProvider } from '@/lib/themeProvider'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Suspense } from 'react'
import '../styles/globals.css'

// Noto Sans JP フォントの設定
const noto = Noto_Sans_JP({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_NAME,
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ColorSchemeScript />
      </head>
      <body
        className={`${noto.className} bg-background dark:bg-backgroundDark text-text dark:text-textDark text-sm tracking-widest`}
      >
        <AppThemeProvider>
          <AppMantineProvider>{children}</AppMantineProvider>
        </AppThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
