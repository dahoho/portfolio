import { FooterPresentational } from '@/components/layout/footer/_containers/presentational'
import dayjs from 'dayjs'

export const FooterContainer = () => {
  const currentYear = dayjs().year()

  return <FooterPresentational currentYear={currentYear} />
}
