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
            backgroundColor: theme === 'dark' ? '#23272F' : '#ffffff',
          },
          content: {
            backgroundColor: theme === 'dark' ? '#23272F' : '#ffffff',
          },
          close: {
            color: theme === 'dark' ? '#ffffff' : '#23272F',
            background: 'transparent',
          },
        }}
      >
        <nav className="text-text dark:text-textDark">
          <ul className="mt-6 flex list-none flex-col gap-5 text-xl">
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
