import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { formatDate } from '@/utils/dateFormat'
import { Title } from '@mantine/core'
import ReactMarkdown, { ExtraProps } from 'react-markdown'

type BlogDetailPresentationalType = {
  article: {
    emoji: {
      value: string
    }
    title: string
    _sys: {
      createdAt: string
    }
    body: string
    slug: string
    tags: {
      _id: string
      name: string
      slug: string
    }[]
  }
  Pre: React.ComponentType<ExtraProps>
  time: () => string
  contentWrapper: () => string
  backButton: () => string
  content: () => string
  H2: React.ComponentType<ExtraProps>
  TocH2: React.ComponentType<ExtraProps>
}

export const BlogDetailPresentational = ({
  article,
  Pre,
  time,
  contentWrapper,
  backButton,
  content,
  H2,
  TocH2,
}: BlogDetailPresentationalType) => {
  return (
    <ContainerLayout>
      <div className="text-7xl text-center">{article.emoji.value}</div>
      <div className={contentWrapper()}>
        <Title order={2}>
          <span className="w-fit mx-auto block">{article.title}</span>
        </Title>
        <time dateTime={formatDate(article._sys.createdAt)} className={time()}>
          {formatDate(article._sys.createdAt)}に公開
        </time>
        <ul className="flex flex-wrap gap-2 mt-6">
          {article.tags.map((tag) => (
            <li
              key={tag.name}
              className="inline-block dark:bg-cardDark bg-card rounded-md py-2 px-3 text-sm mr-2 dark:text-textDark text-text leading-none font-bold"
            >
              {tag.name}
            </li>
          ))}
        </ul>
        <div className="mt-12 dark:bg-cardDark bg-card p-4 rounded-md">
          <h2 className="text-lg font-bold">目次</h2>
          <ul className="[&>li>a]:underline flex flex-col gap-4 mt-4 list-disc pl-4">
            <ReactMarkdown
              allowedElements={['h2']}
              components={{
                h2: TocH2,
              }}
            >
              {article.body}
            </ReactMarkdown>
          </ul>
        </div>
        <div className={content()}>
          <ReactMarkdown
            components={{
              pre: Pre,
              h2: H2,
            }}
          >
            {article.body}
          </ReactMarkdown>
        </div>
      </div>
      <div className={backButton()}>
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
      <ShareButton slug={article.slug} title={article.title} category="blog" />
    </ContainerLayout>
  )
}
