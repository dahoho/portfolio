import { Blog } from '@/components/blog/_containers'
import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'

type BlogArticlePresentationalType = {
  blogArticles: ArticleType[]
}

export const BlogArticlePresentational = ({
  blogArticles,
}: BlogArticlePresentationalType) => {
  return (
    <ContainerLayout>
      <Blog blogArticles={blogArticles} />
      <div className="mt-20 flex justify-center">
        <BackToTopButton path="/">トップに戻る</BackToTopButton>
      </div>
    </ContainerLayout>
  )
}
