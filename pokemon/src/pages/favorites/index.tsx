import React, { useEffect } from 'react'
import Layout from '@/components/Layouts/Layout'
import NoFavorites from '../../components/ui/NoFavorites'
import { useState } from 'react'
import { localFavorites } from '@/utils'
import { Card, Grid } from '@nextui-org/react'
import FavoritesPokemon from '@/components/ui/FavoritesPokemon'

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    const favoritePokemons = localFavorites.getFavoritePokemons()
    console.log(favoritePokemons)
    setFavoritePokemons(favoritePokemons)
  }, [])
  return (
    <Layout>
      {favoritePokemons.length === 0 ? (
        <NoFavorites></NoFavorites>
      ) : (
        <FavoritesPokemon
          favoritePokemons={favoritePokemons}
        ></FavoritesPokemon>
      )}
    </Layout>
  )
}

export default FavoritePage
