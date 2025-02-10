import { PrePresentational } from '@/components/markdown/pre/_containers/presentational'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const PreContainer = ({
  children,
  ...props
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps) => {
  if (!children || typeof children !== 'object') {
    return <code {...props}>{children}</code>
  }

  const childType = 'type' in children ? children.type : ''

  if (childType !== 'code') {
    return <code {...props}>{children}</code>
  }

  const childProps =
    'props' in children
      ? (children.props as { className?: string; children?: React.ReactNode })
      : {}
  const { className, children: code } = childProps
  const classList = className ? className.split(':') : []
  const language = classList[0]?.replace('language-', '')
  const fileName = classList[1]

  return (
    <PrePresentational
      code={code}
      fileName={fileName}
      language={language}
      atomOneDark={atomOneDark}
    />
  )
}
