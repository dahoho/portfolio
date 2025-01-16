import { Header } from '@/app/components/layout/header'
import { MainLayout } from '@/app/components/layout/main'
import { Heading } from '@/app/lib/mantine'
import { getArticleBySlug, getArticles } from '@/app/lib/newt'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

export default async function Article({ params }: ParamsType) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
    <>
      <Header />
      <MainLayout>
        <div className="w-full h-40 sm:h-64 relative">
          <Image
            src={article.coverImage.src}
            alt={article.coverImage.altText}
            layout="fill"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <time
          dateTime={dayjs(article._sys.createdAt).format('YYYY-MM-DD')}
          className="mt-8 block text-center"
        >
          {dayjs(article._sys.createdAt).format('YYYY-MM-DD')}に公開
        </time>
        <div className="mt-8 sm:mt-20">
          <Heading order={2}>{article.title}</Heading>
          <p className="mt-4">
            Amazon：
            <a
              href={article.bookUrl}
              className="underline sm:hover:no-underline"
              target="_blank"
              rel="noreferrer"
            >
              {article.bookUrl}
            </a>
          </p>
          <div className="prose mt-12 prose-h1:dark:text-textDark prose-h2:dark:text-textDark prose-h1:text-text prose-h2:text-text prose-h1:text-xl prose-h2:text-lg dark:text-textDark text-text">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}
