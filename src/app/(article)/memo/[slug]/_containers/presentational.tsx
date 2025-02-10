import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { H2 } from '@/components/markdown/h2/_containers'
import { TocH2 } from '@/components/markdown/tocH2/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { formatDate } from '@/utils/dateFormat'
import { Title } from '@mantine/core'
import ReactMarkdown from 'react-markdown'

type MemoDetailPresentationalType = {
  Pre: React.ComponentType
  article: {
    title: string
    body: string
    slug: string
    _sys: {
      createdAt: string
    }
    tags: {
      _id: string
      name: string
      slug: string
    }[]
  }
  content: () => string
  time: () => string
  contentWrapper: () => string
  backButton: () => string
}

export const MemoDetailPresentational = ({
  Pre,
  article,
  content,
  time,
  contentWrapper,
  backButton,
}: MemoDetailPresentationalType) => {
  return (
    <ContainerLayout>
      <div className="text-7xl text-center">✏️</div>
      <div className={contentWrapper()}>
        <Title order={2}>
          <span className="w-fit mx-auto block">{article.title}</span>
        </Title>
        <time
          dateTime={formatDate(article._sys.createdAt, true)}
          className={time()}
        >
          {formatDate(article._sys.createdAt)}に公開
        </time>
        <div className="mt-6 dark:bg-cardDark bg-card p-6 rounded-md">
          <ul className="[&>li>a]:underline flex flex-col gap-4 list-disc pl-4">
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
      <ShareButton slug={article.slug} title={article.title} category="memo" />
    </ContainerLayout>
  )
}
