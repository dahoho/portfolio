import { BlogDetail } from '@/app/(article)/blog/[slug]/_containers'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export default async function Blog({ params }: ParamsType) {
  return <BlogDetail params={params} />
}
