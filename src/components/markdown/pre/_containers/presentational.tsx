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
        <span className="inline-block rounded-t-md bg-black p-2 text-xs text-white dark:bg-cardDark">
          {fileName}
        </span>
      )}
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className={fileName ? 'mt-0 rounded-t-none' : ''}
      >
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </>
  )
}
