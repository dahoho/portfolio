import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { ShareButton } from '@/app/components/shareButton'
import { LinkButton } from '@/app/components/ui/linkButton'
import { Heading } from '@/app/lib/mantine'
import { getBlogArticleBySlug, getBlogArticles } from '@/app/lib/newt/Blog'
import { formatDate } from '@/app/utils/dateFormat'
import type { Metadata } from 'next'
import Image from 'next/image'
import { tv } from 'tailwind-variants'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getBlogArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getBlogArticleBySlug(slug)

  return {
    title: `${article?.title} | portfolio`,
    description: `ブログページです`,
  }
}

const detailPage = tv({
  slots: {
    imageWrapper: ['w-full', 'h-40', 'sm:h-64', 'relative', '-z-10'],
    time: ['mt-8', 'block', 'text-center'],
    contentWrapper: ['mt-8', 'sm:mt-20'],
    backButton: ['mt-20', 'flex', 'justify-center'],
    content: [
      'prose',
      'mt-12',
      'prose-h2:dark:text-textDark',
      'prose-h2:text-text',
      'prose-h2:text-2xl',
      'prose-h2:border-b',
      'prose-h2:border-border',
      'prose-h2:pb-3',
      'prose-h3:dark:text-textDark',
      'prose-h3:text-text',
      'prose-h3:text-xl',
      'prose-h3:mt-8',
      'prose-h3:leading-7',
      'prose-h4:dark:text-textDark',
      'prose-h4:text-text',
      'prose-h4:text-base',
      'prose-h4:font-bold',
      'prose-strong:dark:text-textDark',
      'prose-strong:text-text',
      'dark:text-textDark',
      'text-text',
      'leading-7',
      'prose-a:text-accent',
      'prose-a:break-all',
    ],
  },
})

export default async function Blog({ params }: ParamsType) {
  const { slug } = await params
  const article = await getBlogArticleBySlug(slug)
  if (!article) return
  const { content, imageWrapper, time, contentWrapper, backButton } =
    detailPage()

  return (
    <ContainerLayout>
      <div className={imageWrapper()}>
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.altText}
          layout="fill"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <time dateTime={formatDate(article._sys.createdAt)} className={time()}>
        {formatDate(article._sys.createdAt)}に公開
      </time>
      <div className={contentWrapper()}>
        <Heading order={2}>{article.title}</Heading>
        <div className={content()}>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
      <div className={backButton()}>
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
      <ShareButton slug={article.slug} title={article.title} />
    </ContainerLayout>
  )
}
