import { ChildrenType } from '@/types/children'
import { Drawer } from '@mantine/core'

type DrawerMenuPropsType = {
  opened: boolean
  close: () => void
} & ChildrenType

export const DrawerMenu = ({
  opened,
  close,
  children,
}: DrawerMenuPropsType) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
      withCloseButton={true}
      closeButtonProps={{ size: 'xl' }}
    >
      {children}
    </Drawer>
  )
}
