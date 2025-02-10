'use client'

import { HeaderPresentational } from '@/components/layout/header/_containers/presentational'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const HeaderContainer = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <HeaderPresentational theme={theme} setTheme={setTheme} />
}
