import { ArticleType } from '@/types/article'
import { sortArticlesByCustomOrder } from '../../utils/sortArticlesByCustomOrder'

import { describe, expect } from 'vitest'

describe('sortArticlesByCustomOrder', () => {
  test('カスタム順序で記事を降順にソートする', () => {
    const articles: ArticleType[] = [
      {
        _id: '6793b611350bdb39a8a918ee',
        title: 'reduce関数について調べてみた',
        slug: 'reduce',
        body: '',
        tags: [],
        _sys: {
          raw: {
            createdAt: '2025-01-24T15:47:29.493Z',
            updatedAt: '2025-01-25T11:03:45.105Z',
            firstPublishedAt: '2025-01-24T15:47:29.493Z',
            publishedAt: '2025-01-25T11:03:45.105Z',
          },
          customOrder: 8,
          createdAt: '2025-01-24T15:47:29.493Z',
          updatedAt: '2025-01-25T11:03:45.105Z',
        },
        emoji: {
          type: 'emoji',
          value: '🙄',
        },
      },
      {
        _id: '6793b425350bdb39a8a8e6c0',
        title: 'CSSの:has()疑似クラスの使い方',
        slug: 'css-has',
        body: '',
        tags: [],
        _sys: {
          raw: {
            createdAt: '2025-01-24T15:39:17.163Z',
            updatedAt: '2025-01-24T16:01:43.649Z',
            firstPublishedAt: '2025-01-24T15:39:17.163Z',
            publishedAt: '2025-01-24T15:59:55.284Z',
          },
          customOrder: 7,
          createdAt: '2025-01-24T15:39:17.163Z',
          updatedAt: '2025-01-24T15:59:55.284Z',
        },
        emoji: {
          type: 'emoji',
          value: '🙂',
        },
      },
      {
        _id: '6793b1da350bdb39a8a89af0',
        title: 'Reactでstorybookのインタラクションテストをやってみる',
        slug: 'storybook',
        body: '',
        tags: [],
        _sys: {
          raw: {
            createdAt: '2025-01-24T15:29:30.488Z',
            updatedAt: '2025-01-25T01:06:56.637Z',
            firstPublishedAt: '2025-01-24T15:29:30.488Z',
            publishedAt: '2025-01-25T01:06:56.637Z',
          },
          customOrder: 6,
          createdAt: '2025-01-24T15:29:30.488Z',
          updatedAt: '2025-01-25T01:06:56.637Z',
        },
        emoji: {
          type: 'emoji',
          value: '🧪',
        },
      },
    ]

    const sortedArticles = sortArticlesByCustomOrder(articles)

    expect(sortedArticles[0].title).toBe('reduce関数について調べてみた')
    expect(sortedArticles[1].title).toBe('CSSの:has()疑似クラスの使い方')
    expect(sortedArticles[2].title).toBe(
      'Reactでstorybookのインタラクションテストをやってみる',
    )
  })

  test('空の配列を処理する', () => {
    const articles: ArticleType[] = []

    const sortedArticles = sortArticlesByCustomOrder(articles)

    expect(sortedArticles).toEqual([])
  })

  test('1つの記事を含む配列を処理する', () => {
    const articles: ArticleType[] = [
      {
        _id: '6793b611350bdb39a8a918ee',
        title: 'reduce関数について調べてみた',
        slug: 'reduce',
        body: '',
        tags: [],
        _sys: {
          raw: {
            createdAt: '2025-01-24T15:47:29.493Z',
            updatedAt: '2025-01-25T11:03:45.105Z',
            firstPublishedAt: '2025-01-24T15:47:29.493Z',
            publishedAt: '2025-01-25T11:03:45.105Z',
          },
          customOrder: 8,
          createdAt: '2025-01-24T15:47:29.493Z',
          updatedAt: '2025-01-25T11:03:45.105Z',
        },
        emoji: {
          type: 'emoji',
          value: '🙄',
        },
      },
    ]

    const sortedArticles = sortArticlesByCustomOrder(articles)

    expect(sortedArticles[0].title).toBe('reduce関数について調べてみた')
  })
})
