export const getGifs = async( category ) => {
  const url     = `https://api.giphy.com/v1/gifs/search?api_key=1xWQq4WjGrN1SZk0XcKV7vjK8u1b5VQd&q=${ category }&limit=10`
  const resp    = await fetch( url )
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id:     img.id,
    title:  img.title,
    url:    img.images.downsized_medium.url
  }))

  return gifs
}