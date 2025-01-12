import { ChildrenType } from '@/app/types/children'

export const MainLayout = ({ children }: ChildrenType) => {
  return <main className="px-5 mt-8">{children}</main>
}
