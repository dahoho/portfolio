export type ArticleType = {
  _id: string
  _sys: {
    raw: [object]
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
  bookUrl: string
  body: string
  coverImage: {
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
  tags: string[]
}
