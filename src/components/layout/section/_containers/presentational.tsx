import { ChildrenType } from '@/types/children'

const SectionPresentational = ({ children }: ChildrenType) => {
  return <section className="first:mt-0 mt-16">{children}</section>
}

export default SectionPresentational
