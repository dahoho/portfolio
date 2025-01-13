'use client'

import { ThemeSwitch, UserAvatar } from '@/app/lib/mantine'
import { useTheme } from 'next-themes'

export const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="h-16 px-5 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-text dark:text-textDark">Hody</h1>

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
