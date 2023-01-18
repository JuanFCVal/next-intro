import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface FavoritePokemonProps {
  id: number
}
const FavoritePokemonCard: FC<FavoritePokemonProps> = ({ id }) => {
  const router = useRouter()
  const OnFavoriteClick = () => {
    console.log('Favorite Clicked', id)
    router.push(`/pokemon/${id}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={OnFavoriteClick}>
      <Card isHoverable>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  )
}

export default FavoritePokemonCard
