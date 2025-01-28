/**
 * 配列を指定したサイズで分割する関数。
 * @param array 分割する配列。
 * @param size 分割するサイズ。
 * @returns 分割された配列。
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  if (!array.length) return []

  const head = array.slice(0, size)
  const tail = array.slice(size)
  return [head, ...chunk(tail, size)]
}
