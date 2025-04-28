'use client'

import { InnerLayout } from '@/components/layout/inner/_containers'
import { Section } from '@/components/layout/section/_containers'
import { EventType } from '@/types/event'

import { Title } from '@mantine/core'

import Image from 'next/image'

type EventPresentationalType = {
  offlineEvents: EventType[]
}

export const EventPresentational = ({
  offlineEvents,
}: EventPresentationalType) => {
  return (
    <Section>
      <Title order={2}>Event</Title>
      <InnerLayout>
        <ul className="flex flex-col gap-6">
          {offlineEvents.map((event) => {
            return (
              <li key={event.id}>
                <a
                  className="flex items-start gap-2 underline"
                  href={event.url}
                  target="_blank"
                >
                  <Image
                    src="/connpass.png"
                    alt="connpass"
                    width={48}
                    height={14}
                    style={{ width: '18px', height: 'auto', marginTop: '4px' }}
                  />{' '}
                  {event.title}
                </a>
              </li>
            )
          })}
        </ul>
      </InnerLayout>
    </Section>
  )
}
