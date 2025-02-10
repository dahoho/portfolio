import { Footer } from '@/components/layout/footer/_containers'
import { Header } from '@/components/layout/header/_containers'
import { MainLayout } from '@/components/layout/main/_containers'

import { SnsList } from '@/components/snsList/_containers'

import { ChildrenType } from '@/types/children'

export const ContainerLayoutPresentational = ({ children }: ChildrenType) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] grid-cols-1 min-h-screen">
      <Header />
      <MainLayout>{children}</MainLayout>
      <SnsList />
      <Footer />
    </div>
  )
}
