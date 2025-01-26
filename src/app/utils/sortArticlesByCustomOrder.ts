/**
 * カスタムオーダーで記事をソートする
 * @param articles 記事データ
 * @returns カスタムオーダーでソートされた記事データ
 */
import { ArticleType } from '@/app/types/article'

export const sortArticlesByCustomOrder = (
  articles: ArticleType[],
): ArticleType[] => {
  return [...articles].sort((a, b) => b._sys.customOrder - a._sys.customOrder)
}
