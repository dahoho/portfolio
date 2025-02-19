import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'
import { formatDate } from '@/utils/dateFormat'
import { Pagination, Title } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type MemoPresentationalPropsType = {
  currentArticles: ArticleType[]
  paginatedArticles: ArticleType[][]
  activePage: number
  setActivePage: Dispatch<SetStateAction<number>>
  isHomePage: boolean
}

export const MemoPresentational = ({
  currentArticles,
  paginatedArticles,
  activePage,
  setActivePage,
  isHomePage,
}: MemoPresentationalPropsType) => {
  return (
    <Section>
      <Title order={2}>Memo</Title>
      <InnerLayout>
        <ul className="mt-4 flex flex-col gap-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="rounded-md bg-card dark:bg-cardDark"
              >
                <Link href={`/memo/${article.slug}`} className="block p-3">
                  <p className="flex gap-2 font-bold">{article.title}</p>
                  <time
                    dateTime={formatDate(article._sys.createdAt, true)}
                    className="mt-3 flex items-center gap-1 text-xs text-gray"
                  >
                    ✏️ {formatDate(article._sys.createdAt)}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-8 flex justify-center">
          {isHomePage ? (
            <BackToTopButton path="/memo">もっとみる</BackToTopButton>
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
