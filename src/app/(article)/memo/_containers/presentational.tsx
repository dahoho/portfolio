import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { Memo } from '@/components/memo/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'

type MemoArticlePresentational = {
  memoArticles: ArticleType[]
}

export const MemoArticlePresentational = ({
  memoArticles,
}: MemoArticlePresentational) => {
  return (
    <ContainerLayout>
      <Memo memoArticles={memoArticles} />
      <div className="mt-20 flex justify-center">
        <BackToTopButton path="/">トップに戻る</BackToTopButton>
      </div>
    </ContainerLayout>
  )
}
