import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import FavoritePokemonCard from '../pokemon/FavoritePokemon'

interface FavoritePokemonsProps {
  favoritePokemons: number[]
}
const FavoritesPokemon: FC<FavoritePokemonsProps> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokemons.map((id) => (
        <FavoritePokemonCard key={id} id={id}></FavoritePokemonCard>
      ))}
    </Grid.Container>
  )
}

export default FavoritesPokemon
