import { NEWT_PREVIEW_SECRET } from '@/config'
import { getBlogArticleBySlug } from '@/lib/newt/Blog'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // secretを検証する、slugパラメータの有無を検証する
  if (secret !== NEWT_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', { status: 401 })
  }

  // slugと対応するコンテンツがあるか検証する
  const article = await getBlogArticleBySlug(slug, true)
  if (!article) {
    return new Response('Invalid slug', { status: 401 })
  }

  // Cookieを設定し、ドラフトモードを有効にする
  await draftMode().then((mode) => mode.enable())

  // 取得した情報からパスを指定してリダイレクトする
  redirect(`/blog/${article.slug}`)
}
