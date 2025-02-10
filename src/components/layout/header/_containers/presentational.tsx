import { Nav } from '@/components/layout/nav/_containers'
import { Avatar, rem, Switch, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type HeaderPresentationalProps = {
  theme?: string
  NAV_ITEMS: { title: string; href: string }[]
  setTheme: Dispatch<SetStateAction<string>>
}

export const HeaderPresentational = ({
  theme,
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
      <Nav theme={theme} />

      <div className="flex items-center gap-6">
        <Switch
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        />
        <Link href="/">
          <Avatar src="/profile.png" alt="" />
        </Link>
      </div>
    </header>
  )
}
