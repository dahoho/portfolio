import { EventPresentational } from '@/components/event/_containers/presentational'
import { getEvent } from '@/lib/event/fetcher'
import { EventType } from '@/types/event'

export const EventContainer = async () => {
  const event = await getEvent()

  const isOnlineEvent = (event: EventType): boolean => {
    return (
      event.place === 'オンライン' ||
      event.address === 'オンライン' ||
      event.description.includes('参加URL') ||
      event.description.includes('配信URL')
    )
  }

  const offlineEvents = event.events.filter(
    (event: EventType) => !isOnlineEvent(event),
  )

  return <EventPresentational offlineEvents={offlineEvents} />
}
