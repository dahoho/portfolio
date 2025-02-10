import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'

import { LinkButton } from '@/components/ui/linkButton/_containers'

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
        <ul className="flex flex-col gap-4 mt-4">
          {currentArticles.map((article) => {
            return (
              <li
                key={article._id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <Link href={`/memo/${article.slug}`} className="block p-3">
                  <p className="font-bold flex gap-2">{article.title}</p>
                  <time
                    dateTime={formatDate(article._sys.createdAt, true)}
                    className="text-gray text-xs mt-3 flex gap-1 items-center"
                  >
                    ✏️ {formatDate(article._sys.createdAt)}
                  </time>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="flex justify-center mt-8">
          {isHomePage ? (
            <LinkButton path="/memo">もっとみる</LinkButton>
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
