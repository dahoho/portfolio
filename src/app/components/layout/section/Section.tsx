import { ChildrenType } from '@/app/types/children'

export const Section = ({ children }: ChildrenType) => {
  return <section className="first:mt-0 mt-8">{children}</section>
}
