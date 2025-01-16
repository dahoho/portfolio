import { Articles } from '@/app/components/articles/Articles'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'
import { ReadingRecord } from '@/app/components/readingRecord'

const Home = async () => {
  return (
    <>
      <ContainerLayout>
        <Profile />
        <Articles />
        <ReadingRecord />
        <Product />
      </ContainerLayout>
    </>
  )
}

export default Home
