import { ShareButtonPresentational } from '@/components/shareButton/_containers/presentational'
import { NEXT_PUBLIC_BASE_URL } from '@/config'

type ShareButtonPropsType = {
  slug: string
  title: string
  category: string
}

export const ShareButtonContainer = ({
  slug,
  title,
  category,
}: ShareButtonPropsType) => {
  if (!slug || !title || !category) return null

  const currentUrl = `${NEXT_PUBLIC_BASE_URL}/${category}/${slug}/`
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${currentUrl}`
  const facebookLink = `https://www.facebook.com/sharer.php?u=${currentUrl}`
  const hatenaLink = `https://b.hatena.ne.jp/entry/${currentUrl}`

  return (
    <ShareButtonPresentational
      twitterLink={twitterLink}
      facebookLink={facebookLink}
      hatenaLink={hatenaLink}
    />
  )
}
