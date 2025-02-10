import { H2Presentational } from '@/components/markdown/h2/_containers/presentational'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'

export const H2Container = ({
  node,
  children,
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps) => {
  const title =
    node?.children[0] && 'value' in node?.children[0]
      ? node?.children[0].value
      : ''

  return <H2Presentational title={title}>{children}</H2Presentational>
}
