import { TocH2Presentational } from '@/components/markdown/tocH2/_containers/presentational'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'

export const TocH2Container = ({
  node,
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps) => {
  const title =
    node?.children[0] && 'value' in node?.children[0]
      ? node?.children[0].value
      : ''

  return <TocH2Presentational title={title} />
}
