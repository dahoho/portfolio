import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { MainLayout } from '@/components/layout/main'
import { SnsList } from '@/components/snsList'
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
