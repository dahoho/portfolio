import { BlogDetail } from '@/app/(article)/blog/[slug]/_containers'
import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import { getBlogArticleBySlug, getBlogArticles } from '@/lib/newt/Blog'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getBlogArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { isEnabled } = await draftMode()
  const { slug } = await params
  const article = await getBlogArticleBySlug(slug, isEnabled)
  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `ブログページです`,
    openGraph: {
      type: 'article',
      title: article?.title,
      description: `ブログページです`,
      url: `${NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
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
      title: article?.title,
      description: `ブログページです`,
      images: [ogImageUrl],
    },
  }
}

export default async function Blog({ params }: ParamsType) {
  return <BlogDetail params={params} />
}
