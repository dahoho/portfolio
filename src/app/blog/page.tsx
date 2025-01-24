import { Blog } from '@/app/components/blog'
import { getBlogArticles } from '@/app/lib/newt/Blog'

const bookArticles = await getBlogArticles()

const BlogArticles = () => {
  return <Blog blogArticles={bookArticles} />
}

export default BlogArticles
