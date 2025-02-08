import { describe, expect, test } from 'vitest'
import { formatDate } from '../../utils/dateFormat'

describe('formatDate', () => {
  test('日付文字列をYYYY-MM-DD形式にフォーマットする', () => {
    const date = '2023-10-05T14:48:00.000Z'
    // ハイフン区切りを指定するために第2引数に true を渡す
    const formattedDate = formatDate(date, true)
    expect(formattedDate).toBe('2023-10-05')
  })

  test('日付文字列をYYYY年M月D日形式にフォーマットする（デフォルト）', () => {
    const date = '2023-10-05T14:48:00.000Z'
    // デフォルトは日本語形式
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2023年10月5日')
  })

  test('無効な日付文字列を処理する', () => {
    const date = 'invalid-date'
    const formattedDate = formatDate(date, true)
    expect(formattedDate).toBe('Invalid Date')
  })

  test('空の日付文字列を処理する', () => {
    const date = ''
    const formattedDate = formatDate(date, true)
    expect(formattedDate).toBe('Invalid Date')
  })
})
