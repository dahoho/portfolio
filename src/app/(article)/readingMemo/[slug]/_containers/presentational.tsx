import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { ArticleType } from '@/types/article'
import { formatDate } from '@/utils/dateFormat'
import { Title } from '@mantine/core'
import Image from 'next/image'
import ReactMarkdown, { ExtraProps } from 'react-markdown'

type ReadingMemoDetailPresentationalType = {
  article: ArticleType
  content: () => string
  imageWrapper: () => string
  time: () => string
  contentWrapper: () => string
  backButton: () => string
  url: () => string
  textLink: () => string
  Pre: React.ComponentType<ExtraProps>
}

export const ReadingMemoDetailPresentational = ({
  article,
  content,
  imageWrapper,
  time,
  contentWrapper,
  backButton,
  url,
  textLink,
  Pre,
}: ReadingMemoDetailPresentationalType) => {
  return (
    <ContainerLayout>
      <div className={imageWrapper()}>
        {article.coverImage && (
          <Image
            src={article.coverImage.src}
            alt={article.coverImage.altText}
            layout="fill"
            priority={true}
            style={{
              objectFit: 'contain',
            }}
          />
        )}
      </div>
      <time dateTime={formatDate(article._sys.createdAt)} className={time()}>
        {formatDate(article._sys.createdAt)}に公開
      </time>
      <div className={contentWrapper()}>
        <Title order={2}>
          <span className="w-fit mx-auto block">
            {`【読書メモ】${article.title}`}
          </span>
        </Title>
        <p className={textLink()}>
          Amazon：
          <a
            href={article.bookUrl}
            className={url()}
            target="_blank"
            rel="noreferrer"
          >
            {article.bookUrl}
          </a>
        </p>
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
      <ShareButton
        slug={article.slug}
        title={article.title}
        category="readingMemo"
      />
    </ContainerLayout>
  )
}
