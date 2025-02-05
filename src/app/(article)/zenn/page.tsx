import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'

import { ZennArticles } from '@/components/zennArticles/_containers'

const response = await fetch(
  'https://zenn.dev/api/articles?username=rh820&order=latest',
)
const zennArticles = await response.json()

const ZennPage = () => {
  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default ZennPage
