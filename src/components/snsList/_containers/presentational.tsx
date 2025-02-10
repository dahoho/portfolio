import { SNS_LIST_ITEM } from '@/constants'
import Image from 'next/image'

export const SnsListPresentational = () => {
  return (
    <ul className="flex justify-center gap-6 leading-loose">
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
