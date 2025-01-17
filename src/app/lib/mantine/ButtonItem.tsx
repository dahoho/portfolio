'use client'

import { Button } from '@mantine/core'

export const ButtonItem = ({ children }) => {
  return (
    <Button
      variant="outline"
      color="#38bdf8"
      size="md"
      onClick={() => history.back()}
    >
      {children}
    </Button>
  )
}
