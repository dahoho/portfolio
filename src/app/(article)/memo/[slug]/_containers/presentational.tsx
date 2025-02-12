import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { H2 } from '@/components/markdown/h2/_containers'
import { TocH2 } from '@/components/markdown/tocH2/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { BackToTopButton } from '@/components/ui/BackToTopButton/_containers'
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
      <div className="text-center text-7xl">✏️</div>
      <div className={contentWrapper()}>
        <Title order={2}>
          <span className="mx-auto block w-fit">{article.title}</span>
        </Title>
        <time
          dateTime={formatDate(article._sys.createdAt, true)}
          className={time()}
        >
          {formatDate(article._sys.createdAt)}に公開
        </time>
        <div className="mt-6 rounded-md bg-card p-6 dark:bg-cardDark">
          <ul className="flex list-disc flex-col gap-4 pl-4 [&>li>a]:underline">
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
        <BackToTopButton path="/">トップに戻る</BackToTopButton>
      </div>
      <ShareButton slug={article.slug} title={article.title} category="memo" />
    </ContainerLayout>
  )
}
