import { InnerLayout } from '@/components/layout/inner'
import { Section } from '@/components/layout/section'
import { LinkButton } from '@/components/ui/linkButton/_containers'

import { Heading, PaginationItem } from '@/lib/mantine'
import { ArticleType } from '@/types/article'
import dayjs from 'dayjs'
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
      <Heading order={2}>Memo</Heading>
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
                    dateTime={dayjs(article._sys.createdAt).format(
                      'YYYY-MM-DD',
                    )}
                    className="text-xs mt-2 flex gap-1 items-center"
                  >
                    ✏️ {dayjs(article._sys.createdAt).format('YYYY-MM-DD')}
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
