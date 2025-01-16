import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading } from '@/app/lib/mantine'
import { getArticles } from '@/app/lib/newt'
import dayjs from 'dayjs'
import Link from 'next/link'

export const ReadingRecord = async () => {
  const articles = await getArticles()
  console.log(articles)

  if (articles.length === 0) return null

  return (
    <Section>
      <Heading order={2}>ReadingRecord</Heading>
      <InnerLayout>
        <p className="text-xs">読んだ本の要約やメモ</p>
        <ul className="flex flex-col gap-4 mt-4">
          {articles.map((article) => {
            return (
              <li
                key={article._id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <Link href={`articles/${article.slug}`} className="block p-3">
                  <p className="font-bold">{article.title}</p>
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
      </InnerLayout>
    </Section>
  )
}
