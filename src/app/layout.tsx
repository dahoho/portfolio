import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import './styles/globals.css'

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core'

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
      <body className="bg-background text-text">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
