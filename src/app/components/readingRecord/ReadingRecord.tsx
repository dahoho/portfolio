import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading } from '@/app/lib/mantine'
import { getArticles } from '@/app/lib/newt'
import Link from 'next/link'

export const ReadingRecord = async () => {
  const articles = await getArticles()

  if (articles.length === 0) return null

  return (
    <Section>
      <Heading order={2}>ReadingRecord</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          {articles.map((article) => {
            return (
              <li
                key={article._id}
                className="bg-card dark:bg-cardDark rounded-md"
              >
                <Link href={`articles/${article.slug}`} className="block p-3">
                  <p className="font-bold">{article.title}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </InnerLayout>
    </Section>
  )
}
