import { Blog } from '@/app/components/blog'
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
        <Blog />
        <Product />
      </MainLayout>
      <Footer />
    </>
  )
}

export default Home
