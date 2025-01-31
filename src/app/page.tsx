import { Blog } from '@/components/blog'
import { ContainerLayout } from '@/components/layout/containerLayout'
import { Product } from '@/components/product'
import { ReadingMemo } from '@/components/readingMemo'
import { ZennArticles } from '@/components/zennArticles'
import { getBlogArticles } from '@/lib/newt/Blog'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'

const Home = async () => {
  const readingMemoArticles = await getReadingMemoArticles()
  const bookArticles = await getBlogArticles()

  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <Blog blogArticles={bookArticles} />
      <ReadingMemo readingMemoArticles={readingMemoArticles} />
      <Product />
    </ContainerLayout>
  )
}

export default Home
