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

export const getProductArticles = cache(async () => {
  const { items } = await client.getContents<ArticleType>({
    appUid: 'product',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        'title',
        'slug',
        'body',
        'tags',
        '_sys',
        'productUrl',
        'category',
      ],
      body: {
        fmt: 'text',
      },
    },
  })
  return items
})
