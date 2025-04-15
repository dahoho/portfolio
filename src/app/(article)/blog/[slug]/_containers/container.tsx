import { BlogDetailPresentational } from '@/app/(article)/blog/[slug]/_containers/presentational'
import { getBlogArticleBySlug } from '@/lib/newt/Blog'

import { draftMode } from 'next/headers'
import { tv } from 'tailwind-variants'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export const BlogDetailContainer = async ({ params }: ParamsType) => {
  const { isEnabled } = await draftMode()

  const { slug } = await params

  const article = await getBlogArticleBySlug(slug, isEnabled)

  if (!article) return

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
        'prose-h2:text-2xl',
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

  const { content, time, contentWrapper, backButton } = detailPage()

  return (
    <BlogDetailPresentational
      article={article}
      time={time}
      contentWrapper={contentWrapper}
      backButton={backButton}
      content={content}
      isEnabled={isEnabled}
    />
  )
}
