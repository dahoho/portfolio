import { ChildrenType } from '@/app/types/children'

export const HeadingLarge = ({ children }: ChildrenType) => {
  return <h2 className="text-3xl text-title">{children}</h2>
}
