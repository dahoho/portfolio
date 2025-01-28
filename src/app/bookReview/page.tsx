import { BookReview } from '@/components/bookReview'
import { ContainerLayout } from '@/components/layout/containerLayout'
import { LinkButton } from '@/components/ui/linkButton'
import { getBookReviewArticles } from '@/lib/newt/BookReview'

const bookReviewArticles = await getBookReviewArticles()

const BookReviewPage = () => {
  return (
    <ContainerLayout>
      <BookReview bookReviewArticles={bookReviewArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default BookReviewPage
