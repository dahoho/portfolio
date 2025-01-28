import { NEXT_PUBLIC_GA_ID } from '@/config'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void
  }
}

export const GA_TAG_ID = NEXT_PUBLIC_GA_ID || ''

export const IS_GATAG = GA_TAG_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_TAG_ID, {
    page_path: path,
  })
}
