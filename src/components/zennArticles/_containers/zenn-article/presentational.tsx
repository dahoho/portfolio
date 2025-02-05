import { InnerLayout } from '@/components/layout/inner'
import { Section } from '@/components/layout/section'
import { LinkButton } from '@/components/ui/linkButton'
import { Heading, PaginationItem } from '@/lib/mantine'
import dayjs from 'dayjs'
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
