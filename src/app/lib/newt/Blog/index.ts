import { ArticleType } from '@/app/types/article'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import 'server-only'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getBlogArticles = cache(async () => {
  const { items } = await client.getContents<ArticleType>({
    appUid: 'Blog',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        'title',
        'slug',
        'body',
        'coverImage',
        'tags',
        '_sys',
        'bookUrl',
      ],
    },
  })
  return items
})

export const getBlogArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<ArticleType>({
    appUid: 'Blog',
    modelUid: 'article',
    query: {
      slug,
      select: [
        '_id',
        'title',
        'slug',
        'body',
        'coverImage',
        'tags',
        '_sys',
        'bookUrl',
      ],
    },
  })
  return article
})
