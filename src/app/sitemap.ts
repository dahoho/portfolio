import { getBlogArticles } from '@/lib/newt/Blog'
import { getBookReviewArticles } from '@/lib/newt/BookReview'
import { MetadataRoute } from 'next'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const defaultPages: MetadataRoute.Sitemap = [
    {
      url: 'https://www.hodii.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.hodii.dev/zenn',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.hodii.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.hodii.dev/bookReview',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.hodii.dev/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  const blogArticles = await getBlogArticles()

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `https://www.hodii.dev/blog/${article.slug}`,
    lastModified: new Date(article._sys.createdAt),
  }))

  const bookReviewArticles = await getBookReviewArticles()

  const bookReviewPages: MetadataRoute.Sitemap = bookReviewArticles.map(
    (article) => ({
      url: `https://www.hodii.dev/bookReview/${article.slug}`,
      lastModified: new Date(article._sys.createdAt),
    }),
  )

  return [...defaultPages, ...blogPages, ...bookReviewPages]
}

export default sitemap
