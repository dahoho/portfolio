import { Articles } from '@/app/components/articles/Articles'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'
import { ReadingRecord } from '@/app/components/readingRecord'
import { getArticles } from '@/app/lib/newt'

const Home = async () => {
  const readingRecordArticles = await getArticles()

  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return (
    <>
      <ContainerLayout>
        <Profile />
        <Articles zennArticles={zennArticles} />
        <ReadingRecord readingRecordArticles={readingRecordArticles} />
        <Product />
      </ContainerLayout>
    </>
  )
}

export default Home
