export type EventGroupType = {
  id: number
  title: string
  url: string
}

export type EventType = {
  id: number
  title: string
  catch: string
  description: string
  url: string
  image_url: string
  hash_tag: string
  started_at: string
  ended_at: string
  limit: number
  event_type: 'participation' | 'advertisement' | string
  open_status: 'open' | 'close' | string
  group: EventGroupType
  address: string
  place: string
  lat: string
  lon: string
  owner_id: number
  owner_nickname: string
  owner_display_name: string
  accepted: number
  waiting: number
  updated_at: string
}
