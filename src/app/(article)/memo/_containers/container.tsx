import { MemoArticlePresentational } from '@/app/(article)/memo/_containers/presentational'
import { getMemoArticles } from '@/lib/newt/memo'

const memoArticles = await getMemoArticles()

export const MemoArticleContainer = () => {
  return <MemoArticlePresentational memoArticles={memoArticles} />
}
