import { Pagination } from '@mantine/core'

type PaginationItemProps = {
  total: number
  value: number
  onChange: (value: number) => void
}

export const PaginationItem = ({
  total,
  value,
  onChange,
}: PaginationItemProps) => {
  return <Pagination total={total} value={value} onChange={onChange} />
}
