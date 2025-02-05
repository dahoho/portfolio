'use client'

import { HeaderPresentational } from '@/components/layout/header/_containers/presentational'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const HeaderContainer = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [burgerColor, setBurgerColor] = useState('#2B2C2C')

  useEffect(() => {
    setBurgerColor(theme === 'dark' ? '#f8fafc' : '#2B2C2C')
  }, [theme])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const NAV_ITEMS = [
    { title: 'Home', href: '/' },
    { title: 'Zenn', href: '/zenn' },
    { title: 'Blog', href: '/blog' },
    { title: 'ReadingMemo', href: '/readingMemo' },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <HeaderPresentational
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      burgerColor={burgerColor}
      theme={theme}
      NAV_ITEMS={NAV_ITEMS}
      setTheme={setTheme}
    />
  )
}
