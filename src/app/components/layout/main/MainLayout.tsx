import { ChildrenType } from '@/app/types/children'

export const MainLayout = ({ children }: ChildrenType) => {
  return (
    <main className="px-5 my-12 max-w-[1024px] w-full mx-auto">{children}</main>
  )
}
