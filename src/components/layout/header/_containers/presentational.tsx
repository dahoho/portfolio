import {
  BurgerButton,
  DrawerMenu,
  ThemeSwitch,
  UserAvatar,
} from '@/lib/mantine'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type HeaderPresentationalProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
  burgerColor: string
  theme?: string
  NAV_ITEMS: { title: string; href: string }[]
  setTheme: Dispatch<SetStateAction<string>>
}

export const HeaderPresentational = ({
  isMenuOpen,
  toggleMenu,
  burgerColor,
  theme,
  NAV_ITEMS,
  setTheme,
}: HeaderPresentationalProps) => {
  return (
    <header className="h-16 px-5 flex items-center justify-between sticky top-0 left-0  backdrop-blur">
      <div>
        <BurgerButton
          opened={isMenuOpen}
          toggle={toggleMenu}
          color={burgerColor}
        />
        <DrawerMenu opened={isMenuOpen} close={toggleMenu} theme={theme}>
          <nav className="dark:text-textDark text-text">
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
