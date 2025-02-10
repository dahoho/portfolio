import { ReadingMemoDetail } from '@/app/(article)/readingMemo/[slug]/_containers'
import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import {
  getReadingMemoArticleBySlug,
  getReadingMemoArticles,
} from '@/lib/newt/ReadingMemo'
import { Metadata } from 'next'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getReadingMemoArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getReadingMemoArticleBySlug(slug)

  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `${article?.title}　読書メモページ`,
    openGraph: {
      type: 'article',
      title: `${article?.title} | ${SITE_NAME}`,
      description: `${article?.title}　読書メモページ`,
      url: `${NEXT_PUBLIC_BASE_URL}/readingMemo/${slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article?.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article?.title} | ${SITE_NAME}`,
      description: `${article?.title}　読書メモページ`,
      images: [ogImageUrl],
    },
  }
}

export default async function Article({ params }: ParamsType) {
  return <ReadingMemoDetail params={params} />
}
