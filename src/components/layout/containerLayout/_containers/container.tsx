import { ContainerLayoutPresentational } from '@/components/layout/containerLayout/_containers/presentational'
import { ChildrenType } from '@/types/children'

export const ContainerLayoutContainer = ({ children }: ChildrenType) => {
  return (
    <ContainerLayoutPresentational>{children}</ContainerLayoutPresentational>
  )
}
