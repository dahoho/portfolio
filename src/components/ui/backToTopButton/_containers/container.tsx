import BackToTopButtonPresentational from '@/components/ui/backToTopButton/_containers/presentational'
import { ChildrenType } from '@/types/children'

type BackToTopButtonPropsType = {
  path: string
} & ChildrenType

export const BackToTopButtonContainer = ({
  children,
  path,
}: BackToTopButtonPropsType) => {
  return (
    <BackToTopButtonPresentational path={path}>
      {children}
    </BackToTopButtonPresentational>
  )
}
