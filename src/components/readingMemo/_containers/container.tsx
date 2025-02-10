'use client'

import { ReadingMemoPresentational } from '@/components/readingMemo/_containers/presentational'
import { usePageNation } from '@/hooks/usePagination'
import { ArticleType } from '@/types/article'

type ReadingMemoPropsType = {
  readingMemoArticles: ArticleType[]
}

export const ReadingMemoContainer = ({
  readingMemoArticles,
}: ReadingMemoPropsType) => {
  const {
    activePage,
    setActivePage,
    currentArticles,
    paginatedArticles,
    isHomePage,
  } = usePageNation(readingMemoArticles)

  if (readingMemoArticles.length === 0) return null

  return (
    <ReadingMemoPresentational
      activePage={activePage}
      setActivePage={setActivePage}
      currentArticles={currentArticles}
      paginatedArticles={paginatedArticles}
      isHomePage={isHomePage}
    />
  )
}
