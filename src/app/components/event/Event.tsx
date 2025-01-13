import { InnerLayout } from '@/app/components/layout/inner'
import { Section } from '@/app/components/layout/section'
import { HeadingLarge } from '@/app/components/ui/heading'

export const Event = async () => {
  return (
    <Section>
      <HeadingLarge>Event</HeadingLarge>
      <InnerLayout>
        <p>Coming soon...</p>
      </InnerLayout>
    </Section>
  )
}
