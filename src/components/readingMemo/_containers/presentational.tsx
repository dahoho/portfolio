import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'

import { LinkButton } from '@/components/ui/linkButton/_containers'

import { ArticleType } from '@/types/article'
import { formatDate } from '@/utils/dateFormat'
import { Pagination, Title } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type ReadingMemoPresentationalPropsType = {
  activePage: number
  setActivePage: Dispatch<SetStateAction<number>>
  currentArticles: ArticleType[]
  paginatedArticles: ArticleType[][]
  isHomePage: boolean
}

export const ReadingMemoPresentational = ({
  activePage,
  setActivePage,
  currentArticles,
  paginatedArticles,
  isHomePage,
}: ReadingMemoPresentationalPropsType) => {
  return (
    <Section>
      <Title order={2}>Reading Memo</Title>
      <InnerLayout>
        <ul className="mt-4 flex flex-col gap-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="rounded-md bg-card dark:bg-cardDark"
              >
                <Link
                  href={`/readingMemo/${article.slug}`}
                  className="block p-3"
                >
                  <p className="font-bold">{`【読書メモ】${article.title}`}</p>
                  <time
                    dateTime={formatDate(article._sys.createdAt, true)}
                    className="mt-3 flex items-center gap-1 text-xs text-gray"
                  >
                    <span className="text-xs">📚</span>
                    {formatDate(article._sys.createdAt)}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-8 flex justify-center">
          {isHomePage ? (
            <LinkButton path="/readingMemo">もっとみる</LinkButton>
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
