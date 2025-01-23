'use client'

import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading, PaginationItem } from '@/app/lib/mantine'
import { ArticleType } from '@/app/types/article'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useState } from 'react'

type BlogType = {
  blogArticles: ArticleType[]
}

const chunk = <T,>(array: T[], size: number): T[][] => {
  if (!array.length) return []

  const head = array.slice(0, size)
  const tail = array.slice(size)
  return [head, ...chunk(tail, size)]
}

export const Blog = ({ blogArticles }: BlogType) => {
  const [activePage, setActivePage] = useState(1)
  const pageSize = 4

  if (blogArticles.length === 0) return null

  // カスタムオーダー順に並び替え
  const sortedArticles = [...blogArticles].sort((a, b) => {
    return b._sys.customOrder - a._sys.customOrder
  })

  const paginatedArticles = chunk(sortedArticles, pageSize)
  const currentArticles = paginatedArticles[activePage - 1] || []

  return (
    <Section>
      <Heading order={2}>Blog</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4 mt-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <Link href={`blog/${article.slug}`} className="block p-3">
                  <p className="font-bold">{article.title}</p>
                  <time
                    dateTime={dayjs(article._sys.createdAt).format(
                      'YYYY-MM-DD',
                    )}
                    className="text-xs mt-2 flex gap-1 items-center"
                  >
                    <span className="text-xs">✍️</span>
                    {dayjs(article._sys.createdAt).format('YYYY-MM-DD')}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-center mt-8">
          <PaginationItem
            total={paginatedArticles.length}
            value={activePage}
            onChange={setActivePage}
          />
        </div>
      </InnerLayout>
    </Section>
  )
}
