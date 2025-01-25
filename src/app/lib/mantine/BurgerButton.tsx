import { Burger } from '@mantine/core'

type BurgerButtonPropsType = {
  opened: boolean
  toggle: () => void
}

export const BurgerButton = ({ opened, toggle }: BurgerButtonPropsType) => {
  return (
    <Burger
      opened={opened}
      onClick={toggle}
      color="#F8FAFC"
      aria-label="Toggle navigation"
    />
  )
}
