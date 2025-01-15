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

export async function generateStaticParams() {
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
        <div className="prose mt-12 prose-h1:dark:text-textDark prose-h2:dark:text-textDark prose-h1:text-text prose-h2:text-text prose-h1:text-2xl prose-h2:text-xl dark:text-textDark text-text">
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      </MainLayout>
    </>
  )
}

export default Article
