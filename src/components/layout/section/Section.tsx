import { ChildrenType } from '@/types/children'

export const Section = ({ children }: ChildrenType) => {
  return <section className="first:mt-0 mt-16">{children}</section>
}
