import { Header } from '@/app/components/layout/header'
import { MainLayout } from '@/app/components/layout/main'
import { Heading } from '@/app/lib/mantine'
import { getArticleBySlug, getArticles } from '@/app/lib/newt'
import type { Metadata } from 'next'

type ParamsType = {
  params: Promise<{
    slug: string
  }>
}

export const generateStaticParams = async () => {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}
export const dynamicParams = false

export const generateMetadata = async ({
  params,
}: ParamsType): Promise<Metadata> => {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  return {
    title: article?.title,
    description: '投稿詳細ページです',
  }
}

const Article = async ({ params }: ParamsType) => {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return null

  return (
    <>
      <Header />
      <MainLayout>
        <Heading order={2}>{article.title}</Heading>
        <div className="prose dark:text-textDark text-sm">
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </MainLayout>
    </>
  )
}

export default Article
