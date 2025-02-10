import { SnsListPresentational } from '@/components/snsList/_containers/presentational'

const SNS_LIST_ITEM = [
  {
    iconPath: '/github.svg',
    iconPathDark: '/github-dark.svg',
    url: 'https://github.com/dahoho',
    alt: 'GitHub',
  },
  {
    iconPath: '/x.png',
    iconPathDark: '/x-dark.svg',
    url: 'https://x.com/hodii0820',
    alt: 'X',
  },
  {
    iconPath: '/zenn.svg',
    url: 'https://zenn.dev/rh820',
    alt: 'Zenn',
  },
  {
    iconPath: '/sizu.svg',
    iconPathDark: '/sizu-dark.svg',
    url: 'https://sizu.me/hody',
    alt: 'sizu',
  },
]

export const SnsListContainer = () => {
  return <SnsListPresentational siteListItem={SNS_LIST_ITEM} />
}
