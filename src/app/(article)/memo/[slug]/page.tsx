import { MemoDetail } from '@/app/(article)/memo/[slug]/_containers'

import { NEXT_PUBLIC_BASE_URL } from '@/config'
import { SITE_NAME } from '@/constants'
import { getMemoArticleBySlug } from '@/lib/newt/memo'

import type { Metadata } from 'next'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getMemoArticleBySlug(slug)

  const ogImageUrl = new URL(
    `/api/og?title=${encodeURIComponent(article?.title || '')}`,
    NEXT_PUBLIC_BASE_URL,
  ).toString()

  return {
    title: `${article?.title} | ${SITE_NAME}`,
    description: `Memoページです`,
    openGraph: {
      type: 'article',
      title: article?.title,
      description: `Memoページです`,
      url: `${NEXT_PUBLIC_BASE_URL}/memo/${slug}`,
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
      description: `Memoページです`,
      images: [ogImageUrl],
    },
  }
}

export default async function Memo({ params }: ParamsType) {
  return <MemoDetail params={params} />
}
