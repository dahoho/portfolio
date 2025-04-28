import { Blog } from '@/components/blog/_containers'
import { Event } from '@/components/event/_containers'
import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { Product } from '@/components/product/_containers'

import { ZennArticles } from '@/components/zennArticles/_containers'

import { getBlogArticles } from '@/lib/newt/Blog'
import { getProductArticles } from '@/lib/newt/Product'
import { getZennArticles } from '@/lib/zenn/fetcher'

const Home = async () => {
  const bookArticles = await getBlogArticles()
  const zennArticles = await getZennArticles()
  const productArticles = await getProductArticles()

  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <Blog blogArticles={bookArticles} />
      <Product productArticles={productArticles} />
      <Event />
    </ContainerLayout>
  )
}

export default Home
