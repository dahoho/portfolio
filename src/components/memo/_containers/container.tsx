'use client'

import { MemoPresentational } from '@/components/memo/_containers/presentational'
import { usePageNation } from '@/hooks/usePagination'
import { ArticleType } from '@/types/article'

type MemoPropsType = {
  memoArticles: ArticleType[]
}

export const MemoContainer = ({ memoArticles }: MemoPropsType) => {
  const {
    activePage,
    setActivePage,
    currentArticles,
    paginatedArticles,
    isHomePage,
  } = usePageNation(memoArticles)

  if (memoArticles.length === 0) return null

  return (
    <MemoPresentational
      currentArticles={currentArticles}
      paginatedArticles={paginatedArticles}
      activePage={activePage}
      setActivePage={setActivePage}
      isHomePage={isHomePage}
    />
  )
}
