import { NAV_ITEMS } from '@/constants'
import { Burger, Drawer } from '@mantine/core'
import Link from 'next/link'

type NavPresentationalProps = {
  isMenuOpen: boolean
  toggleMenu: () => void
  burgerColor: string
  theme?: string
}

export const NavPresentational = ({
  isMenuOpen,
  toggleMenu,
  burgerColor,
  theme,
}: NavPresentationalProps) => {
  return (
    <div>
      <Burger
        opened={isMenuOpen}
        onClick={toggleMenu}
        color={burgerColor}
        aria-label="Toggle navigation"
      />
      <Drawer
        opened={isMenuOpen}
        onClose={toggleMenu}
        withCloseButton={true}
        closeButtonProps={{ size: 'xl' }}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        styles={{
          header: {
            backgroundColor: theme === 'dark' ? '#030712' : '#ffffff',
          },
          content: {
            backgroundColor: theme === 'dark' ? '#030712' : '#ffffff',
          },
          close: {
            color: theme === 'dark' ? '#ffffff' : '#030712',
            background: 'transparent',
          },
        }}
      >
        <nav className="dark:text-textDark text-text">
          <ul className="list-none flex flex-col gap-5 text-xl mt-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.title} onClick={toggleMenu}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </div>
  )
}
