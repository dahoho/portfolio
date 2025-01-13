import { rem, Switch, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'

type ThemeSwitchPropsType = {
  handleClick: () => void
}

export const ThemeSwitch = ({ handleClick }: ThemeSwitchPropsType) => {
  const theme = useMantineTheme()

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  )

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  )

  return (
    <Switch
      onClick={handleClick}
      size="md"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
    />
  )
}
