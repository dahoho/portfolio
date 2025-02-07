export const getZennArticles = async () => {
  const response = await fetch(
    'https://zenn.dev/api/articles?username=rh820&order=latest',
  )
  const zennArticles = await response.json()

  return zennArticles
}
