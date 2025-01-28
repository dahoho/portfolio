import dayjs from 'dayjs'

/**
 * 日付文字列を'YYYY-MM-DD' 形式にフォーマット。
 * @param date - フォーマットする日付文字列。
 * @returns フォーマットされた日付文字列。
 */
export const formatDate = (date: string): string => {
  return dayjs(date).format('YYYY-MM-DD')
}
