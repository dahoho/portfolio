import { Nav } from '@/components/layout/nav/_containers'
import { Avatar, rem, Switch, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type HeaderPresentationalProps = {
  theme?: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const HeaderPresentational = ({
  theme,
  setTheme,
}: HeaderPresentationalProps) => {
  const mantineTheme = useMantineTheme()

  return (
    <header className="sticky left-0 top-0 flex h-16 items-center justify-between px-5  backdrop-blur">
      <Nav theme={theme} />

      <div className="flex items-center gap-6">
        <Switch
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          size="md"
          color="dark.4"
          onLabel={
            <IconSun
              style={{ width: rem(16), height: rem(16) }}
              stroke={2.5}
              color={mantineTheme.colors.yellow[4]}
            />
          }
          offLabel={
            <IconMoonStars
              style={{ width: rem(16), height: rem(16) }}
              stroke={2.5}
              color={mantineTheme.colors.blue[6]}
            />
          }
        />
        <Link href="/">
          <Avatar src="/profile.png" alt="" />
        </Link>
      </div>
    </header>
  )
}
