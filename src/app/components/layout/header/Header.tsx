import { UserAvatar } from '@/app/lib/mantine'

export const Header = () => {
  return (
    <header className="h-16 px-5 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-white">Hody</h1>
      <a href="https://github.com/dahoho" target="_blank" rel="noreferrer">
        <UserAvatar />
      </a>
    </header>
  )
}
