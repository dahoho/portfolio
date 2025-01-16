import { Footer } from '@/app/components/layout/footer'
import { Header } from '@/app/components/layout/header'
import { MainLayout } from '@/app/components/layout/main'
import { ChildrenType } from '@/app/types/children'

export const ContainerLayout = ({ children }: ChildrenType) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] grid-cols-1 min-h-screen">
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </div>
  )
}
