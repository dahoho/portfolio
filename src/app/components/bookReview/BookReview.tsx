'use client'

import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { LinkButton } from '@/app/components/ui/linkButton'
import { Heading, PaginationItem } from '@/app/lib/mantine'
import { ArticleType } from '@/app/types/article'
import { chunk } from '@/app/utils/chunk'
import { sortArticlesByCustomOrder } from '@/app/utils/sortArticlesByCustomOrder'
import dayjs from 'dayjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type BookReviewPropsType = {
  bookReviewArticles: ArticleType[]
}

export const BookReview = ({ bookReviewArticles }: BookReviewPropsType) => {
  const pathname = usePathname()
  const [activePage, setActivePage] = useState(1)

  const pageSize = pathname === '/' ? 5 : 10

  if (bookReviewArticles.length === 0) return null

  const sortedArticles = sortArticlesByCustomOrder(bookReviewArticles)

  const paginatedArticles = chunk(sortedArticles, pageSize)
  const currentArticles = paginatedArticles[activePage - 1] || []

  return (
    <Section>
      <Heading order={2}>Book Review</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4 mt-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <Link
                  href={`/bookReview/${article.slug}`}
                  className="block p-3"
                >
                  <p className="font-bold">{`【要約】${article.title}`}</p>
                  <time
                    dateTime={dayjs(article._sys.createdAt).format(
                      'YYYY-MM-DD',
                    )}
                    className="text-xs mt-2 flex gap-1 items-center"
                  >
                    <span className="text-xs">📚</span>
                    {dayjs(article._sys.createdAt).format('YYYY-MM-DD')}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-center mt-8">
          {pathname === '/' ? (
            <LinkButton path="/bookReview">もっとみる</LinkButton>
          ) : (
            <PaginationItem
              total={paginatedArticles.length}
              value={activePage}
              onChange={setActivePage}
            />
          )}
        </div>
      </InnerLayout>
    </Section>
  )
}
