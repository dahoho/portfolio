type TocH2PresentationalProps = {
  title: string
}

export const TocH2Presentational = ({ title }: TocH2PresentationalProps) => {
  return (
    <li key={title}>
      <a href={`#${title}`}>{title}</a>
    </li>
  )
}
