import { ProductPresentational } from '@/components/product/_containers/presentational'
import { ArticleType } from '@/types/article'

type ProductPropsType = {
  productArticles: ArticleType[]
}

export const ProductContainer = ({ productArticles }: ProductPropsType) => {
  return <ProductPresentational productArticles={productArticles} />
}
