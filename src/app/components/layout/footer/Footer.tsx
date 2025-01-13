import dayjs from 'dayjs'

export const Footer = () => {
  const currentYear = dayjs().year()

  return (
    <footer className="h-12 flex items-center justify-center text-xs">
      &copy; {currentYear} Ryosuke Hoda
    </footer>
  )
}
