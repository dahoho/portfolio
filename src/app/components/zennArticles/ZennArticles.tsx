'use client'

import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { LinkButton } from '@/app/components/ui/linkButton'

import { Heading, PaginationItem } from '@/app/lib/mantine'
import { chunk } from '@/app/utils/chunk'
import dayjs from 'dayjs'
import Image from 'next/image'
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

export const ZennArticles = ({ zennArticles }: ArticlesProps) => {
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
    <Section>
      <Heading order={2}>Zenn</Heading>
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
          {isHomePage ? (
            <LinkButton path="/zenn">もっとみる</LinkButton>
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
