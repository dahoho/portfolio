import { BlogArticlePresentational } from '@/app/(article)/blog/_containers/presentational'
import { getBlogArticles } from '@/lib/newt/Blog'

const blogArticles = await getBlogArticles()

export const BlogArticleContainer = () => {
  return <BlogArticlePresentational blogArticles={blogArticles} />
}
