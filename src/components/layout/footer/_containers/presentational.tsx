import { SITE_NAME } from '@/constants'
import Link from 'next/link'

type FooterPresentationalProps = {
  currentYear: number
}

export const FooterPresentational = ({
  currentYear,
}: FooterPresentationalProps) => {
  return (
    <footer className="h-20 flex flex-col gap-6 items-center justify-center text-xs text-gray mt-12">
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
