import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { ZennArticles } from '@/app/components/zennArticles'

const response = await fetch(
  'https://zenn.dev/api/articles?username=rh820&order=latest',
)
const zennArticles = await response.json()

const ZennPage = () => {
  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
    </ContainerLayout>
  )
}

export default ZennPage
