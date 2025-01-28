import Image from 'next/image'

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

export const SnsList = () => {
  return (
    <ul className="flex justify-center gap-4 leading-loose">
      {SNS_LIST_ITEM.map((item) => (
        <li key={item.url}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {/* 通常画像 */}
            <Image
              src={item.iconPath}
              alt={item.alt}
              width={24}
              height={24}
              className={item.iconPathDark ? 'dark:hidden' : ''}
            />
            {/* ダークモード画像 */}
            {item.iconPathDark && (
              <Image
                src={item.iconPathDark}
                alt={`${item.alt} (Dark Mode)`}
                width={24}
                height={24}
                className="hidden dark:block"
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
