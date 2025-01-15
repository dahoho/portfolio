import { Articles } from '@/app/components/articles/Articles'
import { BookSummary } from '@/app/components/bookSummary'
import { Footer } from '@/app/components/layout/footer'
import { Header } from '@/app/components/layout/header'
import { MainLayout } from '@/app/components/layout/main'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'

const Home = async () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Profile />
        <Articles />
        <BookSummary />
        <Product />
      </MainLayout>
      <Footer />
    </>
  )
}

export default Home
