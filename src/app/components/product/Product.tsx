import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { HeadingLarge } from '@/app/components/ui/heading'

export const Product = () => {
  return (
    <Section>
      <HeadingLarge>Product</HeadingLarge>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          <li className="bg-card rounded-md">
            <a
              href="https://reart-renovation.com/"
              target="_blank"
              rel="noreferrer"
              className="block p-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs bg-accent text-white p-1 rounded-sm">
                  WEBサイト
                </span>
                <p>株式会社リアート様</p>
              </div>
              <p className="mt-2">https://reart-renovation.com/</p>
            </a>
          </li>
        </ul>
      </InnerLayout>
    </Section>
  )
}
