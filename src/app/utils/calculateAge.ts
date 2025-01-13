import dayjs from 'dayjs'

/**
 * 現在の日付よりも誕生日が未来かどうかを確認する。
 * @param birthDate 誕生日
 * @param today 現在の日付
 * @returns 未来の日付の場合はtrue、それ以外はfalse
 */
const isFutureDate = (birthDate: dayjs.Dayjs, today: dayjs.Dayjs): boolean => {
  return birthDate.isAfter(today)
}

/**
 * 現在の年が誕生日より前かどうかを確認する。
 * @param today 現在の日付
 * @param birthDate 誕生日
 * @returns 誕生日より前ならtrue、それ以外はfalse
 */
const isBeforeBirthdayThisYear = (
  today: dayjs.Dayjs,
  birthDate: dayjs.Dayjs,
): boolean => {
  return (
    today.month() < birthDate.month() ||
    (today.month() === birthDate.month() && today.date() < birthDate.date())
  )
}

/**
 * 指定した誕生日から現在の年齢を計算する。
 * @param birthYear 誕生年
 * @param birthMonth 誕生月 (1-12)
 * @param birthDay 誕生日
 * @returns 年齢
 * @throws Error 未来の日付を指定した場合
 */
export const calculateAge = (
  birthYear: number,
  birthMonth: number,
  birthDay: number,
): number => {
  const today = dayjs()
  const birthDate = dayjs(`${birthYear}-${birthMonth}-${birthDay}`, 'YYYY-M-D')

  if (isFutureDate(birthDate, today)) {
    throw new Error('未来の日付を指定することはできません')
  }

  const age =
    today.year() -
    birthDate.year() -
    (isBeforeBirthdayThisYear(today, birthDate) ? 1 : 0)

  return age
}
