import { ChildrenType } from '@/types/children'
import { ThemeProvider } from 'next-themes'

export const AppThemeProvider = ({ children }: ChildrenType) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
