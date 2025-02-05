import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ReadingMemo } from '@/components/readingMemo/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
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
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}
