import { ZennArticlePresentational } from '@/app/(article)/zenn/_containers/presentational'

const response = await fetch(
  'https://zenn.dev/api/articles?username=rh820&order=latest',
)
const zennArticles = await response.json()

export const ZennArticleContainer = () => {
  return <ZennArticlePresentational zennArticles={zennArticles} />
}
