import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ReadingMemo } from '@/components/readingMemo/_containers'

import { LinkButton } from '@/components/ui/linkButton'
import { getReadingMemoArticles } from '@/lib/newt/ReadingMemo'

const readingMemoArticles = await getReadingMemoArticles()

const ReadingMemoPage = () => {
  return (
    <ContainerLayout>
      <ReadingMemo readingMemoArticles={readingMemoArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default ReadingMemoPage
