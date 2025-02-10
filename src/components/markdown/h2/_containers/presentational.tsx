import { ChildrenType } from '@/types/children'

type H2PresentationalProps = {
  title: string
} & ChildrenType

export const H2Presentational = ({
  title,
  children,
}: H2PresentationalProps) => {
  return (
    <h2>
      <a className="scroll-mt-[64px]" id={title} href={`#${title}`}>
        {children}
      </a>
    </h2>
  )
}
