import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'

import { Title } from '@mantine/core'

export const ProductPresentational = () => {
  return (
    <Section>
      <Title order={2}>Product</Title>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          <li className="bg-card dark:bg-cardDark rounded-md">
            <a
              href="https://reart-renovation.com/"
              target="_blank"
              rel="noreferrer"
              className="block p-3"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs bg-accent text-white p-1 rounded-sm font-bold">
                  WEBサイト
                </span>
                <p className="font-bold">株式会社リアート様</p>
              </div>
              <div className="mt-4">
                <p className="mt-1 text-xs">
                  Astro / React / SCSS / microCMS / Netlify
                </p>
              </div>
            </a>
          </li>
        </ul>
      </InnerLayout>
    </Section>
  )
}
