import { describe, expect, test } from 'vitest'
import { formatDate } from '../../utils/dateFormat'

describe('formatDate', () => {
  test('日付文字列をYYYY-MM-DD形式にフォーマットする', () => {
    const date = '2023-10-05T14:48:00.000Z'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('2023-10-05')
  })

  test('無効な日付文字列を処理する', () => {
    const date = 'invalid-date'
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('Invalid Date')
  })

  test('空の日付文字列を処理する', () => {
    const date = ''
    const formattedDate = formatDate(date)
    expect(formattedDate).toBe('Invalid Date')
  })
})
