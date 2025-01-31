import { ChildrenType } from '@/types/children'
import { Drawer } from '@mantine/core'

type DrawerMenuPropsType = {
  opened: boolean
  close: () => void
  theme: 'dark' | 'light'
} & ChildrenType

export const DrawerMenu = ({
  opened,
  close,
  children,
  theme,
}: DrawerMenuPropsType) => {
  return (
    <Drawer
      opened={opened}
      onClose={close}
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
        },
      }}
    >
      {children}
    </Drawer>
  )
}
