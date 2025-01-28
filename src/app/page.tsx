import { Blog } from '@/components/blog'
import { BookReview } from '@/components/bookReview'
import { ContainerLayout } from '@/components/layout/containerLayout'
import { Product } from '@/components/product'
import { Profile } from '@/components/profile'
import { ZennArticles } from '@/components/zennArticles'
import { getBlogArticles } from '@/lib/newt/Blog'
import { getBookReviewArticles } from '@/lib/newt/BookReview'

const Home = async () => {
  const bookReviewArticles = await getBookReviewArticles()
  const bookArticles = await getBlogArticles()

  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return (
    <>
      <ContainerLayout>
        <Profile />
        <ZennArticles zennArticles={zennArticles} />
        <Blog blogArticles={bookArticles} />
        <BookReview bookReviewArticles={bookReviewArticles} />
        <Product />
      </ContainerLayout>
    </>
  )
}

export default Home
