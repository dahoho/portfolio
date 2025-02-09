import {
  Avatar,
  Burger,
  Drawer,
  rem,
  Switch,
  useMantineTheme,
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
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
  const MantineTheme = useMantineTheme()

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={MantineTheme.colors.yellow[4]}
    />
  )

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={MantineTheme.colors.blue[6]}
    />
  )
  return (
    <header className="h-16 px-5 flex items-center justify-between sticky top-0 left-0  backdrop-blur">
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

      <div className="flex items-center gap-6">
        <Switch
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        />
        <a href="https://github.com/dahoho" target="_blank" rel="noreferrer">
          <Avatar src="/profile.png" alt="" />
        </a>
      </div>
    </header>
  )
}
