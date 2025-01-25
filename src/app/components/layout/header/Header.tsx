'use client'

import {
  BurgerButton,
  DrawerMenu,
  ThemeSwitch,
  UserAvatar,
} from '@/app/lib/mantine'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [burgerColor, setBurgerColor] = useState('#334155')

  useEffect(() => {
    setBurgerColor(theme === 'dark' ? '#f8fafc' : '#334155')
  }, [theme])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const NAV_ITEMS = [
    { title: 'Home', href: '/' },
    { title: 'Zenn', href: '/zenn' },
    { title: 'Blog', href: '/blog' },
    { title: 'BookReview', href: '/bookReview' },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="h-16 px-5 flex items-center justify-between sticky top-0 left-0  backdrop-blur">
      <div>
        <BurgerButton
          opened={isMenuOpen}
          toggle={toggleMenu}
          color={burgerColor}
        />
        <DrawerMenu opened={isMenuOpen} close={toggleMenu}>
          <nav className="text-text">
            <ul className="list-none flex flex-col gap-5 text-xl mt-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.title} onClick={toggleMenu}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerMenu>
      </div>

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
