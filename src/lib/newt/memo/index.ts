import { NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from '@/config'
import { ArticleType } from '@/types/article'

import { createClient } from 'newt-client-js'
import { cache } from 'react'
import 'server-only'

const client = createClient({
  spaceUid: NEWT_SPACE_UID + '',
  token: NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getMemoArticles = cache(async () => {
  const { items } = await client.getContents<ArticleType>({
    appUid: 'memo',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        'title',
        'slug',
        'body',
        'tags',
        '_sys',
        'bookUrl',
        'emoji',
      ],
      body: {
        fmt: 'text',
      },
    },
  })
  return items
})

export const getMemoArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<ArticleType>({
    appUid: 'memo',
    modelUid: 'article',
    query: {
      slug,
      select: [
        '_id',
        'title',
        'slug',
        'body',
        'tags',
        '_sys',
        'bookUrl',
        'emoji',
      ],
      body: {
        fmt: 'text',
      },
    },
  })
  return article
})
