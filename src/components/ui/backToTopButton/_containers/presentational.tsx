import { ChildrenType } from '@/types/children'
import Link from 'next/link'

type BackToTopButtonPresentationalPropsType = {
  path: string
} & ChildrenType

const BackToTopButtonPresentational = ({
  children,
  path,
}: BackToTopButtonPresentationalPropsType) => {
  return (
    <Link
      href={path}
      className="block rounded-md bg-accent px-4 py-3 text-center font-bold text-textDark"
    >
      {children}
    </Link>
  )
}

export default BackToTopButtonPresentational
