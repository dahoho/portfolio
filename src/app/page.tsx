import { Blog } from '@/app/components/blog'
import { Event } from '@/app/components/event'
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
        <Event />
        <Product />
      </MainLayout>
    </>
  )
}

export default Home
