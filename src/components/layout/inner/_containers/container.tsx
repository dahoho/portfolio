import InnerLayoutPresentational from '@/components/layout/inner/_containers/presentational'
import { ChildrenType } from '@/types/children'

export const InnerLayoutContainer = ({ children }: ChildrenType) => {
  return <InnerLayoutPresentational>{children}</InnerLayoutPresentational>
}
