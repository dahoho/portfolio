import { Blog } from '@/app/components/blog'
import { BookReview } from '@/app/components/bookReview/BookReview'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'
import { ZennArticles } from '@/app/components/zennArticles'
import { getBlogArticles } from '@/app/lib/newt/Blog'
import { getBookReviewArticles } from '@/app/lib/newt/BookReview'

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
