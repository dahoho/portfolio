import { ChildrenType } from '@/types/children'
import Link from 'next/link'

type LinkButtonPropsType = {
  path: string
} & ChildrenType

export const LinkButton = ({ children, path }: LinkButtonPropsType) => {
  return (
    <Link
      href={path}
      className="bg-accent block py-3 px-4 rounded-md text-center font-bold text-textDark"
    >
      {children}
    </Link>
  )
}
