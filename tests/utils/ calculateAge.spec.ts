import dayjs from 'dayjs'
import { describe, expect } from 'vitest'
import { calculateAge } from '../../src/app/utils/calculateAge'

describe('calculateAge', () => {
  test('誕生日が今年すでに過ぎている場合、正しい年齢を計算するべき', () => {
    const birthYear = 1990
    const birthMonth = 1
    const birthDay = 1
    const age = calculateAge(birthYear, birthMonth, birthDay)
    const expectedAge = dayjs().year() - birthYear
    expect(age).toBe(expectedAge)
  })

  test('誕生日が未来の日付の場合、エラーを投げるべき', () => {
    const birthYear = 1990
    const birthMonth = 12
    const birthDay = 31
    const age = calculateAge(birthYear, birthMonth, birthDay)
    const expectedAge = dayjs().year() - birthYear - 1
    expect(age).toBe(expectedAge)
  })

  test('未来の日付を指定した場合、エラーを投げるべき', () => {
    const birthYear = dayjs().year() + 1
    const birthMonth = 1
    const birthDay = 1
    expect(() => calculateAge(birthYear, birthMonth, birthDay)).toThrow(
      '未来の日付を指定することはできません',
    )
  })

  test('1994年8月20日の誕生日の場合、正しい年齢を計算するべき', () => {
    const birthYear = 1994
    const birthMonth = 8
    const birthDay = 20
    const age = calculateAge(birthYear, birthMonth, birthDay)
    const expectedAge =
      dayjs().year() -
      birthYear -
      (dayjs().isBefore(dayjs(`${dayjs().year()}-08-20`)) ? 1 : 0)
    expect(age).toBe(expectedAge)
  })
})
