import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading } from '@/app/lib/mantine'
import dayjs from 'dayjs'
import Image from 'next/image'

type ZennArticleType = {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

export const Blog = async () => {
  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const data = await response.json()
  const articles: ZennArticleType[] = data.articles.slice(0, 10)

  return (
    <Section>
      <Heading order={2}>Blog</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          {articles.map((article) => {
            return (
              <li
                key={article.id}
                className="bg-card dark:bg-cardDark rounded-md text-textDark"
              >
                <a
                  href={`https://zenn.dev/${article.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2"
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
      </InnerLayout>
    </Section>
  )
}
