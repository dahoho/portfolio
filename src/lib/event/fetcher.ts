export const getEvent = async () => {
  const response = await fetch(
    'https://connpass.com/api/v2/users/hoda820/attended_events?count=50',
    {
      headers: {
        'X-API-Key': process.env.NEXT_PUBLIC_CONN_PASS_API_KEY || '',
      },
    },
  )

  const eventResponse = await response.json()

  return eventResponse
}
