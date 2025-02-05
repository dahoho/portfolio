import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { Memo } from '@/components/memo/_containers'

import { LinkButton } from '@/components/ui/linkButton'
import { getMemoArticles } from '@/lib/newt/memo'

const memoArticles = await getMemoArticles()

const MemoArticles = () => {
  return (
    <ContainerLayout>
      <Memo memoArticles={memoArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default MemoArticles
