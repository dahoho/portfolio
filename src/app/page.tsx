import { Articles } from '@/app/components/articles/Articles'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'
import { ReadingRecord } from '@/app/components/readingRecord'
import { getArticles } from '@/app/lib/newt'

const Home = async () => {
  const articles = await getArticles()
  return (
    <>
      <ContainerLayout>
        <Profile />
        <Articles />
        <ReadingRecord articles={articles} />
        <Product />
      </ContainerLayout>
    </>
  )
}

export default Home
