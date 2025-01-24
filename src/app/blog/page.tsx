import { Blog } from '@/app/components/blog'
import { ContainerLayout } from '@/app/components/layout/containerLayout'
import { getBlogArticles } from '@/app/lib/newt/Blog'

const bookArticles = await getBlogArticles()

const BlogArticles = () => {
  return (
    <ContainerLayout>
      <Blog blogArticles={bookArticles} />
    </ContainerLayout>
  )
}

export default BlogArticles
