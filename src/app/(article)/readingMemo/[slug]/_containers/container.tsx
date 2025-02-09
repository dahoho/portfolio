import { ReadingMemoDetailPresentational } from '@/app/(article)/readingMemo/[slug]/_containers/presentational'
import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import {
  getReadingMemoArticleBySlug,
  getReadingMemoArticles,
} from '@/lib/newt/ReadingMemo'
import { Metadata } from 'next'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { tv } from 'tailwind-variants'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getReadingMemoArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getReadingMemoArticleBySlug(slug)

  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `${article?.title}　読書メモページ`,
    openGraph: {
      type: 'article',
      title: `${article?.title} | ${SITE_NAME}`,
      description: `${article?.title}　読書メモページ`,
      url: `${NEXT_PUBLIC_BASE_URL}/readingMemo/${slug}`,
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
      title: `${article?.title} | ${SITE_NAME}`,
      description: `${article?.title}　読書メモページ`,
      images: [ogImageUrl],
    },
  }
}

const detailPage = tv({
  slots: {
    imageWrapper: ['w-full', 'h-40', 'sm:h-64', 'relative', '-z-10'],
    time: ['mt-8', 'block', 'text-center'],
    contentWrapper: ['mt-8', 'sm:mt-20'],
    backButton: ['mt-20', 'flex', 'justify-center'],
    url: ['underline', 'sm:hover:no-underline'],
    textLink: ['mt-6'],
    content: [
      'prose',
      'max-w-full',
      'mt-12',
      'prose-h2:dark:text-textDark',
      'prose-h2:text-text',
      'prose-h2:text-xl',
      'prose-h2:border-b',
      'prose-h2:border-border',
      '[&>h2>a]:text-text',
      '[&>h2>a]:dark:text-textDark',
      '[&>h2>a]:no-underline',
      '[&>h2>a]:block',
      '[&>h2>a]:pb-3',
      'prose-h3:dark:text-textDark',
      'prose-h3:text-text',
      'prose-h3:text-lg',
      'prose-h3:mt-8',
      'prose-h4:dark:text-textDark',
      'prose-h4:text-text',
      'prose-h4:text-base',
      'prose-h4:font-bold',
      'prose-strong:dark:text-textDark',
      'prose-strong:text-text',
      'dark:text-textDark',
      'leading-8',
      'prose-a:text-link',
      'prose-a:break-all',
    ],
  },
})

export const ReadingMemoDetailContainer = async ({ params }: ParamsType) => {
  const { slug } = await params

  const article = await getReadingMemoArticleBySlug(slug)

  if (!article) return

  const {
    content,
    imageWrapper,
    time,
    contentWrapper,
    backButton,
    url,
    textLink,
  } = detailPage()

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
        ? (children.props as {
            className?: string
            children?: React.ReactNode
          })
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
          style={monokaiSublime}
          className={fileName ? 'rounded-t-none mt-0' : ''}
        >
          {String(code).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </>
    )
  }
  return (
    <ReadingMemoDetailPresentational
      article={article}
      content={content}
      imageWrapper={imageWrapper}
      time={time}
      contentWrapper={contentWrapper}
      backButton={backButton}
      url={url}
      textLink={textLink}
      Pre={Pre}
    />
  )
}
