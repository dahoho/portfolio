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
  }
  Pre: React.ComponentType<ExtraProps>
  time: () => string
  contentWrapper: () => string
  backButton: () => string
  content: () => string
}

export const BlogDetailPresentational = ({
  article,
  Pre,
  time,
  contentWrapper,
  backButton,
  content,
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
      <ShareButton slug={article.slug} title={article.title} category="blog" />
    </ContainerLayout>
  )
}
