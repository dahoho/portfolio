import { ChildrenType } from '@/types/children'

const MainLayoutPresentational = ({ children }: ChildrenType) => {
  return (
    <main className="mx-auto my-16 w-full max-w-[760px] px-5">{children}</main>
  )
}

export default MainLayoutPresentational
