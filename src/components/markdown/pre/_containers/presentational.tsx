import { CSSProperties, ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

type PrePresentationalProps = {
  code: ReactNode
  fileName: string
  language: string
  atomOneDark: {
    [key: string]: CSSProperties
  }
}

export const PrePresentational = ({
  fileName,
  language,
  atomOneDark,
  code,
}: PrePresentationalProps) => {
  return (
    <>
      {fileName && (
        <span className="inline-block dark:bg-cardDark bg-black text-white p-2 rounded-t-md text-xs">
          {fileName}
        </span>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className={fileName ? 'rounded-t-none mt-0' : ''}
      >
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  )
}
