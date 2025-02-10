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
    <div className="bg-card rounded-md mt-20 p-6">
      <h3 className="text-text font-bold pb-4 text-center">記事をシェアする</h3>
      <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 list-none p-0 m-0">
        <li>
          <a
            href={twitterLink}
            className="flex items-center justify-center gap-2 rounded-md font-bold h-12 w-52 text-center no-underline transition-colors duration-300 ease-in-out border border-[#0f1419] text-[#0f1419]"
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
            className="flex items-center justify-center gap-2 rounded-md font-bold h-12 w-52 text-center no-underline transition-colors duration-300 ease-in-out border border-[#1877f2] text-[#1877f2]"
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
            className="flex items-center justify-center gap-2 rounded-md font-bold h-12 w-52 text-center no-underline transition-colors duration-300 ease-in-out border border-[#00a4de] text-[#00a4de]"
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
