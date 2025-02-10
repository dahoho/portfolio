'use client'

import { HeaderPresentational } from '@/components/layout/header/_containers/presentational'
import { NAV_ITEMS } from '@/constants'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const HeaderContainer = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <HeaderPresentational
      theme={theme}
      NAV_ITEMS={NAV_ITEMS}
      setTheme={setTheme}
    />
  )
}
