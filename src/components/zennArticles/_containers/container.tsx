'use client'

import { ZennArticlesPresentational } from '@/components/zennArticles/_containers/presentational'
import { chunk } from '@/utils/chunk'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type ZennArticleType = {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

type ArticlesProps = {
  zennArticles: {
    articles: ZennArticleType[]
  }
}

export const ZennArticlesContainer = ({ zennArticles }: ArticlesProps) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const articles = zennArticles.articles

  const [activePage, setActivePage] = useState(1)
  const TOP_PAGE_SIZE = 5
  const OTHER_PAGE_SIZE = 10
  const pageSize = isHomePage ? TOP_PAGE_SIZE : OTHER_PAGE_SIZE

  const paginatedArticles = chunk(articles, pageSize)
  const currentArticles = paginatedArticles[activePage - 1] || []

  return (
    <ZennArticlesPresentational
      currentArticles={currentArticles}
      setActivePage={setActivePage}
      isHomePage={isHomePage}
      paginatedArticles={paginatedArticles}
      activePage={activePage}
    />
  )
}
