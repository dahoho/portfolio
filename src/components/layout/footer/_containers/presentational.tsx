import { SITE_NAME } from '@/constants'
import Link from 'next/link'

type FooterPresentationalProps = {
  currentYear: number
}

export const FooterPresentational = ({
  currentYear,
}: FooterPresentationalProps) => {
  return (
    <footer className="mt-12 flex h-20 flex-col items-center justify-center gap-6 text-xs text-gray">
      <Link
        href="/privacy"
        className="block text-center text-xs underline sm:hover:no-underline"
      >
        プライバシーポリシー
      </Link>
      &copy; {currentYear} {SITE_NAME}
    </footer>
  )
}
