import { BlogDetailPresentational } from '@/app/(article)/blog/[slug]/_containers/presentational'
import { getBlogArticleBySlug } from '@/lib/newt/Blog'
import { detailPage } from '@/styles/detailPage'

import { draftMode } from 'next/headers'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export const BlogDetailContainer = async ({ params }: ParamsType) => {
  const { isEnabled } = await draftMode()
  const { slug } = await params

  const article = await getBlogArticleBySlug(slug, isEnabled)

  if (!article) return

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
