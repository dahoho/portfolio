import { BlogDetailPresentational } from '@/app/(article)/blog/[slug]/_containers/presentational'
import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import { getBlogArticleBySlug, getBlogArticles } from '@/lib/newt/Blog'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { ClassAttributes, HTMLAttributes } from 'react'
import { ExtraProps } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { tv } from 'tailwind-variants'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getBlogArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// export const dynamicParams = false

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { isEnabled } = await draftMode()
  const { slug } = await params
  const article = await getBlogArticleBySlug(slug, isEnabled)

  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `ブログページです`,
    openGraph: {
      type: 'article',
      title: article?.title,
      description: `ブログページです`,
      url: `${NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
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
      description: `ブログページです`,
      images: [ogImageUrl],
    },
  }
}

const detailPage = tv({
  slots: {
    time: ['mt-8', 'block', 'text-center'],
    contentWrapper: ['mt-8', 'sm:mt-20'],
    backButton: ['mt-20', 'flex', 'justify-center'],
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
      'prose-h3:leading-7',
      'prose-h4:dark:text-textDark',
      'prose-h4:text-text',
      'prose-h4:text-base',
      'prose-h4:font-bold',
      'prose-strong:dark:text-textDark',
      'prose-strong:text-text',
      'dark:text-textDark',
      'text-text',
      'leading-8',
      'prose-a:text-link',
      'prose-a:break-all',
    ],
  },
})

const H2 = ({
  node,
  children,
}: ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps) => {
  const title =
    node?.children[0] && 'value' in node?.children[0]
      ? node?.children[0].value
      : ''
  return (
    <h2>
      <a className="scroll-mt-[64px]" id={title} href={`#${title}`}>
        {children}
      </a>
    </h2>
  )
}

export const BlogDetailContainer = async ({ params }: ParamsType) => {
  const { isEnabled } = await draftMode()
  const { slug } = await params

  const article = await getBlogArticleBySlug(slug, isEnabled)

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

  const TocH2 = ({
    node,
  }: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps) => {
    const title =
      node?.children[0] && 'value' in node?.children[0]
        ? node?.children[0].value
        : ''
    return (
      <li key={title}>
        <a href={`#${title}`}>{title}</a>
      </li>
    )
  }

  return (
    <BlogDetailPresentational
      article={article}
      Pre={Pre}
      H2={H2}
      time={time}
      TocH2={TocH2}
      contentWrapper={contentWrapper}
      backButton={backButton}
      content={content}
    />
  )
}
