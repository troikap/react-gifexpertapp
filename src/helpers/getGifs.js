
export const getGifs = async ( category ) => {
  const apiKey = 'yyxlu7IzYd9JQzoCBCm5Pl93L2y7haSe'
  const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI( category ) }&limit=5`)
  const { data } = await peticion.json();
  const gifs = data.map( ( gif ) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  })
  return gifs;
}