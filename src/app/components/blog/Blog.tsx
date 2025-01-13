import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { HeadingLarge } from '@/app/components/ui/heading'
import dayjs from 'dayjs'

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
      <HeadingLarge>Blog</HeadingLarge>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          {articles.map((article) => {
            return (
              <li key={article.id} className="bg-card rounded-md">
                <a
                  href={`https://zenn.dev/${article.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2"
                >
                  <time
                    dateTime={dayjs(article.published_at).format('YYYY-MM-DD')}
                  >
                    {dayjs(article.published_at).format('YYYY-MM-DD')}
                  </time>
                  <div className="flex gap-2 mt-1">
                    <span>{article.emoji}</span>

                    <p>{article.title}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </InnerLayout>
    </Section>
  )
}
