import Image from 'next/image'

const SNS_LIST_ITEM = [
  {
    iconPath: '/github.svg',
    url: 'https://github.com/dahoho',
    alt: 'GitHub',
  },
  {
    iconPath: '/x.svg',
    url: 'https://x.com/hody820',
    alt: 'X',
  },
  {
    iconPath: '/zenn.svg',
    url: 'https://zenn.dev/rh820',
    alt: 'Zenn',
  },
]

export const SnsList = () => {
  return (
    <ul className="flex gap-4 leading-loose mt-5">
      {SNS_LIST_ITEM.map((item) => {
        return (
          <li key={item.url}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={item.iconPath}
                alt={item.alt}
                width={24}
                height={24}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
