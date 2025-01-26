// react-syntax-highlighterの型定義ファイル
declare module 'react-syntax-highlighter/dist/esm/default-highlight' {
  import { FC } from 'react'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SyntaxHighlighter: FC<any>
  export default SyntaxHighlighter
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const monokaiSublime: any
}
