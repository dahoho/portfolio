import { Burger } from '@mantine/core'

type BurgerButtonPropsType = {
  opened: boolean
  toggle: () => void
  color: string
}

export const BurgerButton = ({
  opened,
  toggle,
  color,
}: BurgerButtonPropsType) => {
  return (
    <Burger
      opened={opened}
      onClick={toggle}
      color={color}
      aria-label="Toggle navigation"
    />
  )
}
