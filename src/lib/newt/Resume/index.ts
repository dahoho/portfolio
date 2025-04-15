import { NEWT_API_TOKEN, NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from '@/config'
import { ArticleType } from '@/types/article'

import { createClient } from 'newt-client-js'
import { cache } from 'react'
import 'server-only'

// Newt CDN APIのクライアント（公開コンテンツのみ取得）
const cdnClient = createClient({
  spaceUid: NEWT_SPACE_UID + '',
  token: NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

// Newt APIのクライアント（全コンテンツ取得）
const apiClient = createClient({
  spaceUid: NEWT_SPACE_UID + '',
  token: NEWT_API_TOKEN + '',
  apiType: 'api',
})

export const getResumeArticles = cache(async () => {
  const { items } = await cdnClient.getContents<ArticleType>({
    appUid: 'Resume',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'body', 'tags', '_sys', 'emoji'],
      body: {
        fmt: 'text',
      },
    },
  })
  return items
})

export const getResumeArticleBySlug = cache(
  async (slug: string, isDraft: boolean) => {
    const client = isDraft ? apiClient : cdnClient
    const article = await client.getFirstContent<ArticleType>({
      appUid: 'Resume',
      modelUid: 'article',
      query: {
        slug,
        select: ['_id', 'title', 'slug', 'body', 'tags', '_sys', 'emoji'],
        body: {
          fmt: 'text',
        },
      },
    })
    return article
  },
)
