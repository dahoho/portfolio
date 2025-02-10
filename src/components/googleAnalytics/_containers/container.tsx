'use client'

import { GoogleAnalyticsPresentational } from '@/components/googleAnalytics/_containers/presentational'
import { IS_GATAG, pageview } from '@/lib/gtag'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const GoogleAnalyticsContainer = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!IS_GATAG) return

    const url = pathname + searchParams.toString()

    pageview(url)
  }, [pathname, searchParams])

  return <GoogleAnalyticsPresentational />
}
