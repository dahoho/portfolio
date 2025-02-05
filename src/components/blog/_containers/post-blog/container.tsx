'use client'

import { BlogPresentational } from '@/components/blog/_containers/post-blog/presentational'
import { usePageNation } from '@/hooks/usePagination'
import { ArticleType } from '@/types/article'

type BlogPropsType = {
  blogArticles: ArticleType[]
}

export const BlogContainer = ({ blogArticles }: BlogPropsType) => {
  const {
    activePage,
    setActivePage,
    currentArticles,
    paginatedArticles,
    isHomePage,
  } = usePageNation(blogArticles)

  if (blogArticles.length === 0) return null

  return (
    <BlogPresentational
      activePage={activePage}
      setActivePage={setActivePage}
      currentArticles={currentArticles}
      paginatedArticles={paginatedArticles}
      isHomePage={isHomePage}
    />
  )
}
