import { ChildrenType } from '@/app/types/children'
import { Title } from '@mantine/core'

type HeadingPropsType = {
  order: 1 | 2 | 3 | 4 | 5 | 6
} & ChildrenType

export const Heading = ({ order, children }: HeadingPropsType) => {
  return <Title order={order}>{children}</Title>
}
