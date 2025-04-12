import { Blog } from '@/components/blog/_containers'
import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { Product } from '@/components/product/_containers'

import { ReadingMemo } from '@/components/readingMemo/_containers'

import { ZennArticles } from '@/components/zennArticles/_containers'

import { getBlogArticles } from '@/lib/newt/Blog'
import { getProductArticles } from '@/lib/newt/Product'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'
import { getZennArticles } from '@/lib/zenn/fetcher'

const Home = async () => {
  const readingMemoArticles = await getReadingMemoArticles()
  const bookArticles = await getBlogArticles()
  const zennArticles = await getZennArticles()
  const productArticles = await getProductArticles()

  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <Blog blogArticles={bookArticles} />
      <ReadingMemo readingMemoArticles={readingMemoArticles} />
      <Product productArticles={productArticles} />
    </ContainerLayout>
  )
}

export default Home
