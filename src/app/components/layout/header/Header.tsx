'use client'

import { Heading, ThemeSwitch, UserAvatar } from '@/app/lib/mantine'
import { useTheme } from 'next-themes'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-16 px-5 flex items-center justify-between">
      <Heading order={1}>Hody</Heading>

      <div className="flex items-center gap-6">
        <ThemeSwitch
          handleClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <a href="https://github.com/dahoho" target="_blank" rel="noreferrer">
          <UserAvatar />
        </a>
      </div>
    </header>
  )
}
