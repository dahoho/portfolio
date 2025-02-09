import { ContainerLayout } from '@/components/layout/containerLayout/_containers'
import { ShareButton } from '@/components/shareButton/_containers'
import { LinkButton } from '@/components/ui/linkButton/_containers'
import { formatDate } from '@/utils/dateFormat'
import { TagIcon } from '@heroicons/react/16/solid'
import { Title } from '@mantine/core'
import Link from 'next/link'
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
  isEnabled: boolean
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
  isEnabled,
}: BlogDetailPresentationalType) => {
  return (
    <ContainerLayout>
      <div className="text-7xl text-center">{article.emoji.value}</div>
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
        {isEnabled && (
          <Link
            href="/api/disable-draft"
            prefetch={false}
            className="block underline text-center mt-8"
          >
            Draft Modeをやめる
          </Link>
        )}
        <div className="flex items-center gap-2 mt-12">
          {article.tags.length > 0 && (
            <>
              <TagIcon className="w-5" />
              <ul className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <li key={tag.name}>
                    #{tag.name}
                    {index < article.tags.length - 1 && ','}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
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
      <ShareButton slug={article.slug} title={article.title} category="blog" />
    </ContainerLayout>
  )
}
