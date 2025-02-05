import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ShareButton } from '@/components/shareButton'
import { LinkButton } from '@/components/ui/linkButton'
import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import { Heading } from '@/lib/mantine'
import { getMemoArticleBySlug, getMemoArticles } from '@/lib/newt/memo'
import { formatDate } from '@/utils/dateFormat'

import type { Metadata } from 'next'
import { ClassAttributes, HTMLAttributes } from 'react'
import ReactMarkdown, { ExtraProps } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { tv } from 'tailwind-variants'

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

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getMemoArticleBySlug(slug)

  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `Memoページです`,
    openGraph: {
      type: 'article',
      title: article?.title,
      description: `Memoページです`,
      url: `${NEXT_PUBLIC_BASE_URL}/memo/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article?.title,
      description: `Memoページです`,
      images: [ogImageUrl],
    },
  }
}

const detailPage = tv({
  slots: {
    time: ['mt-4', 'block', 'text-center'],
    contentWrapper: ['mt-8', 'sm:mt-20'],
    backButton: ['mt-20', 'flex', 'justify-center'],
    content: [
      'prose',
      'max-w-full',
      'mt-12',
      'prose-h2:dark:text-textDark',
      'prose-h2:text-text',
      'prose-h2:text-2xl',
      'prose-h2:border-b',
      'prose-h2:border-border',
      'prose-h2:pb-3',
      'prose-h3:dark:text-textDark',
      'prose-h3:text-text',
      'prose-h3:text-xl',
      'prose-h3:mt-8',
      'prose-h3:leading-7',
      'prose-h4:dark:text-textDark',
      'prose-h4:text-text',
      'prose-h4:text-base',
      'prose-h4:font-bold',
      'prose-strong:dark:text-textDark',
      'prose-strong:text-text',
      'dark:text-textDark',
      'text-text',
      'leading-7',
      'prose-a:text-link',
      'prose-a:break-all',
    ],
  },
})

export default async function Memo({ params }: ParamsType) {
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
          <span className="block dark:bg-cardDark bg-black text-white px-3 py-4 rounded-t-md text-xs">
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
    <ContainerLayout>
      <div className="text-7xl text-center">✏️</div>
      <div className={contentWrapper()}>
        <Heading order={2}>
          <span className="w-fit mx-auto block">{article.title}</span>
        </Heading>
        <time dateTime={formatDate(article._sys.createdAt)} className={time()}>
          {formatDate(article._sys.createdAt)}に公開
        </time>
        <div className={content()}>
          <ReactMarkdown
            components={{
              pre: Pre,
            }}
          >
            {article.body}
          </ReactMarkdown>
        </div>
      </div>
      <div className={backButton()}>
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
      <ShareButton slug={article.slug} title={article.title} category="memo" />
    </ContainerLayout>
  )
}
