import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { ZennArticles } from '@/components/zennArticles/_containers'

type ZennArticleType = {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

type ArticlesProps = {
  zennArticles: {
    articles: ZennArticleType[]
  }
}

export const ZennArticlePresentational = ({ zennArticles }: ArticlesProps) => {
  return (
    <ContainerLayout>
      <ZennArticles zennArticles={zennArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}
