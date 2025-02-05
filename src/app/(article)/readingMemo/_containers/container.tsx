import { ReadingMemoArticlePresentational } from '@/app/(article)/readingMemo/_containers/presentational'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'

const readingMemoArticles = await getReadingMemoArticles()

export const ReadingMemoArticleContainer = () => {
  return (
    <ReadingMemoArticlePresentational
      readingMemoArticles={readingMemoArticles}
    />
  )
}
