import { Blog } from '@/components/blog/_containers'
import { ContainerLayout } from '@/components/layout/containerLayout/_containers'

import { Memo } from '@/components/memo'
import { Product } from '@/components/product'
import { ReadingMemo } from '@/components/readingMemo/_containers'

import { ZennArticles } from '@/components/zennArticles/_containers'

import { getBlogArticles } from '@/lib/newt/Blog'
import { getMemoArticles } from '@/lib/newt/memo'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'

const Home = async () => {
  const readingMemoArticles = await getReadingMemoArticles()
  const bookArticles = await getBlogArticles()
  const memoArticles = await getMemoArticles()

  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <Blog blogArticles={bookArticles} />
      <ReadingMemo readingMemoArticles={readingMemoArticles} />
      <Memo memoArticles={memoArticles} />
      <Product />
    </ContainerLayout>
  )
}

export default Home
