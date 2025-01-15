import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { Heading } from '@/app/lib/mantine'

export const Product = () => {
  return (
    <Section>
      <Heading order={2}>Product</Heading>
      <InnerLayout>
        <ul className="flex flex-col gap-4">
          <li className="bg-card dark:bg-cardDark rounded-md ">
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
              <p className="mt-2">https://reart-renovation.com/</p>
            </a>
          </li>
        </ul>
      </InnerLayout>
    </Section>
  )
}
