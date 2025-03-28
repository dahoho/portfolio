import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { H2 } from '@/components/markdown/h2/_containers'
import { Pre } from '@/components/markdown/pre/_containers'
import { TocH2 } from '@/components/markdown/tocH2/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { ArticleType } from '@/types/article'
import { formatDate } from '@/utils/dateFormat'
import { Title } from '@mantine/core'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

type ReadingMemoDetailPresentationalType = {
  article: ArticleType
  content: () => string
  imageWrapper: () => string
  time: () => string
  contentWrapper: () => string
  backButton: () => string
  url: () => string
  textLink: () => string
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
      <time
        dateTime={formatDate(article._sys.createdAt, true)}
        className={time()}
      >
        {formatDate(article._sys.createdAt)}に公開
      </time>
      <div className={contentWrapper()}>
        <Title order={2}>
          <span className="mx-auto block w-fit">
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
      <ShareButton
        slug={article.slug}
        title={article.title}
        category="readingMemo"
      />
    </ContainerLayout>
  )
}
