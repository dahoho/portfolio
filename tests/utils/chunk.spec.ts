import { describe, expect } from 'vitest'
import { chunk } from '../../src/app/utils/chunk'

describe('chunk', () => {
  test('入力配列が空の場合、空の配列を返すべき', () => {
    expect(chunk([], 2)).toEqual([])
  })

  test('サイズが配列の長さより大きい場合、同じ配列を返すべき', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  test('配列を指定されたサイズのチャンクに分割するべき', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test('サイズが配列の長さの倍数である場合、正しくチャンクに分割するべき', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
  })

  test('サイズが配列の長さの倍数でない場合、正しくチャンクに分割するべき', () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]])
  })
})
