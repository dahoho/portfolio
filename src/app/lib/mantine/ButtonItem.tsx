'use client'

import { ChildrenType } from '@/app/types/children'
import { Button } from '@mantine/core'

export const ButtonItem = ({ children }: ChildrenType) => {
  return (
    <Button
      variant="outline"
      color="#38bdf8"
      size="lg"
      onClick={() => history.back()}
    >
      {children}
    </Button>
  )
}
