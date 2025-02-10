import { NavPresentational } from '@/components/layout/nav/_containers/presentational'
import { useEffect, useState } from 'react'

type NavPresentationalProps = {
  theme?: string
}

export const NavContainer = ({ theme }: NavPresentationalProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const [burgerColor, setBurgerColor] = useState('#2B2C2C')

  useEffect(() => {
    setBurgerColor(theme === 'dark' ? '#f8fafc' : '#2B2C2C')
  }, [theme])

  return (
    <NavPresentational
      isMenuOpen={isMenuOpen}
      toggleMenu={toggleMenu}
      burgerColor={burgerColor}
      theme={theme}
    />
  )
}
