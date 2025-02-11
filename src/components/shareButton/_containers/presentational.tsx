import Image from 'next/image'

type ShareButtonPresentationalPropsType = {
  twitterLink: string
  facebookLink: string
  hatenaLink: string
}

export const ShareButtonPresentational = ({
  twitterLink,
  facebookLink,
  hatenaLink,
}: ShareButtonPresentationalPropsType) => {
  return (
    <div className="mt-20 rounded-md bg-card p-6">
      <h3 className="pb-4 text-center font-bold text-text">記事をシェアする</h3>
      <ul className="m-0 flex list-none flex-col items-center justify-center gap-4 p-0 sm:flex-row">
        <li>
          <a
            href={twitterLink}
            className="flex h-12 w-52 items-center justify-center gap-2 rounded-md border border-[#0f1419] text-center font-bold text-[#0f1419] no-underline transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/x.png"
              alt="Xでシェアする"
              className="block"
              width={16}
              height={16}
            />
            ポストする
          </a>
        </li>
        <li>
          <a
            href={facebookLink}
            className="flex h-12 w-52 items-center justify-center gap-2 rounded-md border border-[#1877f2] text-center font-bold text-[#1877f2] no-underline transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.svg"
              alt="Facebookでシェアする"
              className="block"
              width={16}
              height={16}
            />
            シェアする
          </a>
        </li>
        <li>
          <a
            href={hatenaLink}
            className="flex h-12 w-52 items-center justify-center gap-2 rounded-md border border-[#00a4de] text-center font-bold text-[#00a4de] no-underline transition-colors duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/hatena.svg"
              alt="はてなブックマークする"
              className="block"
              width={16}
              height={16}
            />
            ブックマークする
          </a>
        </li>
      </ul>
    </div>
  )
}
