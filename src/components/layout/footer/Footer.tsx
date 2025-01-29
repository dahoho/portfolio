import { SITE_NAME } from '@/constants'
import dayjs from 'dayjs'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = dayjs().year()

  return (
    <footer className="h-20 flex flex-col gap-6 items-center justify-center text-xs mt-12">
      <Link
        href="/privacy"
        className="text-xs text-center block underline sm:hover:no-underline"
      >
        プライバシーポリシー
      </Link>
      &copy; {currentYear} {SITE_NAME}
    </footer>
  )
}
