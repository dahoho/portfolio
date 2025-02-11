import { ChildrenType } from '@/types/children'

const SectionPresentational = ({ children }: ChildrenType) => {
  return <section className="mt-16 first:mt-0">{children}</section>
}

export default SectionPresentational
