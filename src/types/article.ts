// 投稿記事の型定義
export type ArticleType = {
  _id: string
  _sys: {
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
    customOrder: number
    createdAt: string
    updatedAt: string
  }
  emoji: {
    type: string
    value: string
  }
  title: string
  slug: string
  bookUrl?: string
  productUrl?: string
  category?: string
  body: string
  coverImage?: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileSize: number
    fileType: string
    height: number
    metadata: object
    src: string
    title: string
    width: number
  }
  tags: {
    _id: string
    name: string
    slug: string
  }[]
}
