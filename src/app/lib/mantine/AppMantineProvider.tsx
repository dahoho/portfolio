import { ChildrenType } from '@/app/types/children'
import { MantineProvider } from '@mantine/core'

export const AppMantineProvider = ({ children }: ChildrenType) => {
  return <MantineProvider>{children}</MantineProvider>
}
