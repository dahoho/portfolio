import { BookReview } from '@/app/components/bookReview'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { getBookReviewArticles } from '@/app/lib/newt/BookReview'

const bookReviewArticles = await getBookReviewArticles()

const BookReviewPage = () => {
  return (
    <ContainerLayout>
      <BookReview bookReviewArticles={bookReviewArticles} />
    </ContainerLayout>
  )
}

export default BookReviewPage
