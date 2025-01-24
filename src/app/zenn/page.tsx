import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { LinkButton } from '@/app/components/ui/linkButton'
import { ZennArticles } from '@/app/components/zennArticles'

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
