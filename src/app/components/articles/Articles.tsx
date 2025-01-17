'use client'

import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading, PaginationItem } from '@/app/lib/mantine'
import dayjs from 'dayjs'
import Image from 'next/image'
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

const chunk = <T,>(array: T[], size: number): T[][] => {
  if (!array.length) return []

  const head = array.slice(0, size)
  const tail = array.slice(size)
  return [head, ...chunk(tail, size)]
}

export const Articles = ({ zennArticles }: ArticlesProps) => {
  const articles: ZennArticleType[] = zennArticles.articles.slice(0, 10)

  const [activePage, setActivePage] = useState(1)
  const pageSize = 4

  const paginatedArticles = chunk(articles, pageSize)
  const currentArticles = paginatedArticles[activePage - 1] || []

  return (
    <Section>
      <Heading order={2}>Articles</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4 mt-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article.id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <a
                  href={`https://zenn.dev/${article.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-3"
                >
                  <div className="flex gap-2">
                    <span>{article.emoji}</span>
                    <p className="font-bold">{article.title}</p>
                  </div>
                  <time
                    dateTime={dayjs(article.published_at).format('YYYY-MM-DD')}
                    className="text-xs mt-2 flex gap-1 items-center"
                  >
                    <Image src="zenn.svg" alt="Zenn" width={12} height={12} />
                    {dayjs(article.published_at).format('YYYY-MM-DD')}
                  </time>
                </a>
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
