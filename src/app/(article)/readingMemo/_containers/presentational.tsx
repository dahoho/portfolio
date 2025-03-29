import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ReadingMemo } from '@/components/readingMemo/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'

type ReadingMemoArticlePresentationalType = {
  readingMemoArticles: ArticleType[]
}

export const ReadingMemoArticlePresentational = ({
  readingMemoArticles,
}: ReadingMemoArticlePresentationalType) => {
  return (
    <ContainerLayout>
      <ReadingMemo readingMemoArticles={readingMemoArticles} />
      <div className="mt-20 flex justify-center">
        <BackToTopButton path="/">トップに戻る</BackToTopButton>
      </div>
    </ContainerLayout>
  )
}
