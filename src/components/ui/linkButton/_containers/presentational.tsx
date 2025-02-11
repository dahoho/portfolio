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
      className="block rounded-md bg-accent px-4 py-3 text-center font-bold text-textDark"
    >
      {children}
    </Link>
  )
}

export default LinkButtonPresentational
