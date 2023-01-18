const toggleFavorite = (id: number) => {
  let favorite: number[] = JSON.parse(localStorage.getItem('favorite') || '[]')
  if (favorite.includes(id)) {
    favorite = favorite.filter((item) => item !== id)
  } else {
    favorite.push(id)
  }
  localStorage.setItem('favorite', JSON.stringify(favorite))
}

const isFavorite = (id: number) => {
  const favorite: number[] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  )
  return favorite.includes(id)
}

const getFavoritePokemons = (): number[] => {
  const pokemons: number[] = JSON.parse(
    localStorage.getItem('favorite') || '[]'
  )
  return pokemons
}

export default { toggleFavorite, isFavorite, getFavoritePokemons }
