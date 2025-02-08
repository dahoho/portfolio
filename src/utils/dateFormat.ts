import dayjs from 'dayjs'

/**
 * 日付文字列を指定の形式にフォーマット。
 *
 * @param date - フォーマットする日付文字列。
 * @param useHyphenSeparator - true の場合はハイフン区切り（YYYY-MM-DD）、false の場合は日本語表記（YYYY年M月D日）。
 * @returns フォーマットされた日付文字列。
 */
export const formatDate = (
  date: string,
  useHyphenSeparator: boolean = false,
): string => {
  const formatStr = useHyphenSeparator ? 'YYYY-MM-DD' : 'YYYY年M月D日'
  return dayjs(date).format(formatStr)
}
