import { MemoDetailPresentational } from '@/app/(article)/memo/[slug]/_containers/presentational'
import { getMemoArticleBySlug, getMemoArticles } from '@/lib/newt/memo'
import { detailPage } from '@/styles/detailPage'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getMemoArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export const MemoDetailContainer = async ({ params }: ParamsType) => {
  const { slug } = await params
  const article = await getMemoArticleBySlug(slug)
  if (!article) return

  const { content, time, contentWrapper, backButton } = detailPage()

  const Pre = ({
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
      <>
        {fileName && (
          <span className="inline-block dark:bg-cardDark bg-black text-white p-2 rounded-t-md text-xs">
            {fileName}
          </span>
        )}
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          className={fileName ? 'rounded-t-none mt-0' : ''}
        >
          {String(code).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </>
    )
  }

  return (
    <MemoDetailPresentational
      Pre={Pre}
      article={article}
      content={content}
      time={time}
      contentWrapper={contentWrapper}
      backButton={backButton}
    />
  )
}
