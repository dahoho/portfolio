import { SITE_NAME } from '@/constants'
import { getBlogArticles } from '@/lib/newt/Blog'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: `https://www.${SITE_NAME}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `https://www.${SITE_NAME}/zenn`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `https://www.${SITE_NAME}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `https://www.${SITE_NAME}/readingMemo`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `https://www.${SITE_NAME}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  const blogArticles = await getBlogArticles()

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `https://www.${SITE_NAME}/blog/${article.slug}`,
    lastModified: new Date(article._sys.createdAt),
  }))

  const readingMemoArticles = await getReadingMemoArticles()

  const readingMemoPages: MetadataRoute.Sitemap = readingMemoArticles.map(
    (article) => ({
      url: `https://www.${SITE_NAME}/readingMemo/${article.slug}`,
      lastModified: new Date(article._sys.createdAt),
    }),
  )

  return [...defaultPages, ...blogPages, ...readingMemoPages]
}

export default sitemap
