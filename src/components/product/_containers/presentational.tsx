import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'
import { ArticleType } from '@/types/article'

import { Title } from '@mantine/core'

type ProductPropsType = {
  productArticles: ArticleType[]
}

export const ProductPresentational = ({
  productArticles,
}: ProductPropsType) => {
  return (
    <Section>
      <Title order={2}>Product</Title>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          {productArticles.map((article) => (
            <li
              key={article._id}
              className="bg-card dark:bg-cardDark rounded-md"
            >
              <a
                href={article.productUrl}
                target="_blank"
                rel="noreferrer"
                className="block p-3"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 text-xs bg-accent text-white p-1 rounded-sm font-bold">
                    {article.category}
                  </span>
                  <p className="font-bold">{article.title}</p>
                </div>
                <ul className="flex flex-wrap  text-xs text-gray leading-6 mt-2">
                  {article.tags.map((tag, index) => (
                    <li key={tag.name}>
                      &nbsp;
                      {tag.name} {index < article.tags.length - 1 && '/'}
                      &nbsp;
                    </li>
                  ))}
                </ul>
              </a>
            </li>
          ))}
        </ul>
      </InnerLayout>
    </Section>
  )
}
