import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { ButtonItem, Heading } from '@/app/lib/mantine'
import { getArticleBySlug, getArticles } from '@/app/lib/newt'
import dayjs from 'dayjs'
import type { Metadata } from 'next'
import Image from 'next/image'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: ParamsType): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

export default async function Article({ params }: ParamsType) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return

  return (
    <ContainerLayout>
      <div className="w-full h-40 sm:h-64 relative -z-10">
        <Image
          src={article.coverImage.src}
          alt={article.coverImage.altText}
          layout="fill"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <time
        dateTime={dayjs(article._sys.createdAt).format('YYYY-MM-DD')}
        className="mt-8 block text-center"
      >
        {dayjs(article._sys.createdAt).format('YYYY-MM-DD')}に公開
      </time>
      <div className="mt-8 sm:mt-20">
        <Heading order={2}>{article.title}</Heading>
        <p className="mt-4">
          Amazon：
          <a
            href={article.bookUrl}
            className="underline sm:hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            {article.bookUrl}
          </a>
        </p>
        <div
          className="prose mt-12 prose-h2:dark:text-textDark
        prose-h2:text-text prose-h2:text-xl prose-h2:border-b prose-h2:border-border prose-h2:pb-3 prose-h3:dark:text-textDark prose-h3:text-text prose-h3:text-base prose-h3:mt-8 prose-h3:leading-7 prose-h4:dark:text-textDark prose-h4:text-text  prose-h4:text-base pose-h4:font-bold dark:text-textDark text-text text-sm leading-6"
        >
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </div>
      <div className="text-center mt-20">
        <ButtonItem>Back</ButtonItem>
      </div>
    </ContainerLayout>
  )
}
