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
              className="rounded-md bg-card dark:bg-cardDark"
            >
              <a
                href={article.productUrl}
                target="_blank"
                rel="noreferrer"
                className="block p-3"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 rounded-sm bg-accent p-1 text-xs font-bold text-white">
                    {article.category}
                  </span>
                  <p className="font-bold">{article.title}</p>
                </div>
                <ul className="mt-2 flex  flex-wrap text-xs leading-6 text-gray">
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
