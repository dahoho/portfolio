import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { BackToTopButton } from '@/components/ui/BackToTopButton/_containers'
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
        <BackToTopButton path="/">トップに戻る</BackToTopButton>
      </div>
    </ContainerLayout>
  )
}
