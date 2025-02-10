import { ChildrenType } from '@/types/children'
import Link from 'next/link'

type LinkButtonPresentationalPropsType = {
  path: string
} & ChildrenType

const LinkButtonPresentational = ({
  children,
  path,
}: LinkButtonPresentationalPropsType) => {
  return (
    <Link
      href={path}
      className="bg-accent block py-3 px-4 rounded-md text-center font-bold text-textDark"
    >
      {children}
    </Link>
  )
}

export default LinkButtonPresentational
