import { ChildrenType } from '@/types/children'

const MainLayoutPresentational = ({ children }: ChildrenType) => {
  return (
    <main className="px-5 my-16 max-w-[1024px] w-full mx-auto">{children}</main>
  )
}

export default MainLayoutPresentational
