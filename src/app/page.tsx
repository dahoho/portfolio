import { Articles } from '@/app/components/articles/Articles'
import { BookReview } from '@/app/components/bookReview/BookReview'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { Product } from '@/app/components/product'
import { Profile } from '@/app/components/profile'
import { getArticles } from '@/app/lib/newt'

const Home = async () => {
  const bookReviewArticles = await getArticles()

  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return (
    <>
      <ContainerLayout>
        <Profile />
        <Articles zennArticles={zennArticles} />
        <BookReview bookReviewArticles={bookReviewArticles} />
        <Product />
      </ContainerLayout>
    </>
  )
}

export default Home
