import LinkButtonPresentational from '@/components/ui/linkButton/_containers/presentational'
import { ChildrenType } from '@/types/children'

type LinkButtonPropsType = {
  path: string
} & ChildrenType

export const LinkButtonContainer = ({
  children,
  path,
}: LinkButtonPropsType) => {
  return (
    <LinkButtonPresentational path={path}>{children}</LinkButtonPresentational>
  )
}
