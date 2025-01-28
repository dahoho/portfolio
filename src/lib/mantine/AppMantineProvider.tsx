import { ChildrenType } from '@/types/children'
import { MantineProvider } from '@mantine/core'

export const AppMantineProvider = ({ children }: ChildrenType) => {
  return <MantineProvider>{children}</MantineProvider>
}
