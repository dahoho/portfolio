import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'
import { formatDate } from '@/utils/dateFormat'
import { Pagination, Title } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type BlogPresentationalPropsType = {
  activePage: number
  setActivePage: Dispatch<SetStateAction<number>>
  currentArticles: ArticleType[]
  paginatedArticles: ArticleType[][]
  isHomePage: boolean
}

export const BlogPresentational = ({
  activePage,
  setActivePage,
  currentArticles,
  paginatedArticles,
  isHomePage,
}: BlogPresentationalPropsType) => {
  return (
    <Section>
      <Title order={2}>Blog</Title>
      <InnerLayout>
        <ul className="mt-4 flex flex-col gap-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="rounded-md bg-card dark:bg-cardDark"
              >
                <Link href={`/blog/${article.slug}`} className="block p-3">
                  <p className="flex gap-2 font-bold">
                    <span>{article.emoji.value}</span>
                    {article.title}
                  </p>
                  <time
                    dateTime={formatDate(article._sys.createdAt, true)}
                    className="mt-3 flex items-center gap-1 text-xs text-gray dark:text-grayDark"
                  >
                    {formatDate(article._sys.createdAt)}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-8 flex justify-center">
          {isHomePage ? (
            <BackToTopButton path="/blog">もっとみる</BackToTopButton>
          ) : (
            <Pagination
              total={paginatedArticles.length}
              value={activePage}
              onChange={setActivePage}
              color="#58C4DC"
            />
          )}
        </div>
      </InnerLayout>
    </Section>
  )
}
