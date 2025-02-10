import { ReadingMemoDetailPresentational } from '@/app/(article)/readingMemo/[slug]/_containers/presentational'
import { getReadingMemoArticleBySlug } from '@/lib/newt/ReadingMemo'
import { tv } from 'tailwind-variants'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export const ReadingMemoDetailContainer = async ({ params }: ParamsType) => {
  const { slug } = await params

  const article = await getReadingMemoArticleBySlug(slug)

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

  const {
    content,
    imageWrapper,
    time,
    contentWrapper,
    backButton,
    url,
    textLink,
  } = detailPage()

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
    />
  )
}
