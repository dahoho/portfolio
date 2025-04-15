import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { H2 } from '@/components/markdown/h2/_containers'
import { Pre } from '@/components/markdown/pre/_containers'
import { TocH2 } from '@/components/markdown/tocH2/_containers'
import { BackToTopButton } from '@/components/ui/backToTopButton/_containers'

import { formatDate } from '@/utils/dateFormat'
import { Title } from '@mantine/core'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

type ResumeDetailPresentationalType = {
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
  time: () => string
  contentWrapper: () => string
  backButton: () => string
  content: () => string
  isEnabled: boolean
}

export const ResumeDetailPresentational = ({
  article,
  time,
  contentWrapper,
  backButton,
  content,
  isEnabled,
}: ResumeDetailPresentationalType) => {
  return (
    <ContainerLayout>
      <div className="text-center text-7xl">{article.emoji.value}</div>
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
        {isEnabled && (
          <Link
            href="/api/disable-draft"
            prefetch={false}
            className="mt-8 block text-center underline"
          >
            Draft Modeをやめる
          </Link>
        )}
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
    </ContainerLayout>
  )
}
