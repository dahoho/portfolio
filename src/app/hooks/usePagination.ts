import { ArticleType } from '@/app/types/article'
import { chunk } from '@/app/utils/chunk'
import { sortArticlesByCustomOrder } from '@/app/utils/sortArticlesByCustomOrder'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const usePageNation = (articles: ArticleType[]) => {
  const [activePage, setActivePage] = useState(1)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const pageSize = isHomePage ? 5 : 10

  const sortedArticles = sortArticlesByCustomOrder(articles)

  const paginatedArticles = chunk(sortedArticles, pageSize)
  const currentArticles = paginatedArticles[activePage - 1] || []

  return {
    activePage,
    setActivePage,
    currentArticles,
    paginatedArticles,
    isHomePage,
  }
}
