import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { Heading } from '@/lib/mantine'
import { formatDate } from '@/utils/dateFormat'
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
        <Heading order={2}>
          <span className="w-fit mx-auto block">{article.title}</span>
        </Heading>
        <time dateTime={formatDate(article._sys.createdAt)} className={time()}>
          {formatDate(article._sys.createdAt)}に公開
        </time>
        <div className={content()}>
          <ReactMarkdown
            components={{
              pre: Pre,
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
