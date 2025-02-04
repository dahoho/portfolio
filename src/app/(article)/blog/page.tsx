import { Blog } from '@/components/blog'
import { ContainerLayout } from '@/components/layout/containerLayout'
import { LinkButton } from '@/components/ui/linkButton'
import { getBlogArticles } from '@/lib/newt/Blog'

const blogArticles = await getBlogArticles()

const BlogArticles = () => {
  return (
    <ContainerLayout>
      <Blog blogArticles={blogArticles} />
      <div className="mt-20 flex justify-center">
        <LinkButton path="/">トップに戻る</LinkButton>
      </div>
    </ContainerLayout>
  )
}

export default BlogArticles
