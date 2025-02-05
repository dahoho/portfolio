import { Blog } from '@/components/blog'
import { ContainerLayout } from '@/components/layout/containerLayout'
import { Memo } from '@/components/memo'
import { Product } from '@/components/product'
import { ReadingMemo } from '@/components/readingMemo'
import { ZennArticles } from '@/components/zennArticles/_containers/zenn-article'

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
