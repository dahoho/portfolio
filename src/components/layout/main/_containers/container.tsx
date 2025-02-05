import MainLayoutPresentational from '@/components/layout/main/_containers/presentational'
import { ChildrenType } from '@/types/children'

export const MainLayoutContainer = ({ children }: ChildrenType) => {
  return <MainLayoutPresentational>{children}</MainLayoutPresentational>
}
