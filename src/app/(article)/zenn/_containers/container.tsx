import { ZennArticlePresentational } from '@/app/(article)/zenn/_containers/presentational'
import { getZennArticles } from '@/lib/zenn/fetcher'

const zennArticles = await getZennArticles()

export const ZennArticleContainer = () => {
  return <ZennArticlePresentational zennArticles={zennArticles} />
}
