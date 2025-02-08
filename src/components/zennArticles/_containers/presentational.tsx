import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'

import { LinkButton } from '@/components/ui/linkButton/_containers'
import { formatDate } from '@/utils/dateFormat'

import { Pagination, Title } from '@mantine/core'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

type ZennArticleType = {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

type ZennArticlesPresentationalType = {
  currentArticles: ZennArticleType[]
  setActivePage: Dispatch<SetStateAction<number>>
  isHomePage: boolean
  paginatedArticles: ZennArticleType[][]
  activePage: number
}

export const ZennArticlesPresentational = ({
  currentArticles,
  setActivePage,
  isHomePage,
  paginatedArticles,
  activePage,
}: ZennArticlesPresentationalType) => {
  return (
    <Section>
      <Title order={2}>Zenn</Title>
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
                    dateTime={formatDate(article.published_at, true)}
                    className="text-gray text-xs mt-3 flex gap-1 items-center"
                  >
                    <Image src="zenn.svg" alt="Zenn" width={12} height={12} />
                    {formatDate(article.published_at)}
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
            <Pagination
              total={paginatedArticles.length}
              value={activePage}
              onChange={setActivePage}
              color="#38bdf8"
            />
          )}
        </div>
      </InnerLayout>
    </Section>
  )
}
