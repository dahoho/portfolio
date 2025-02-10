import SectionPresentational from '@/components/layout/section/_containers/presentational'
import { ChildrenType } from '@/types/children'

export const SectionContainer = ({ children }: ChildrenType) => {
  return <SectionPresentational>{children}</SectionPresentational>
}
