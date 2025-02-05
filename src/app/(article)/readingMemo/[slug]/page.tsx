import { ReadingMemoDetail } from '@/app/(article)/readingMemo/[slug]/_containers'

type ParamsType = {
  params: Promise<{ slug: string }>
}

export default async function Article({ params }: ParamsType) {
  return <ReadingMemoDetail params={params} />
}
