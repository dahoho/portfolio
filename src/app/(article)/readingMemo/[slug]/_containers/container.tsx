import { ReadingMemoDetailPresentational } from '@/app/(article)/readingMemo/[slug]/_containers/presentational'
import { getReadingMemoArticleBySlug } from '@/lib/newt/ReadingMemo'
import { detailPage } from '@/styles/detailPage'

type ParamsType = {
  params: Promise<{ slug: string }>
}

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
