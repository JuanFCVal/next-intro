import Layout from '@/components/Layouts/Layout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { GetStaticPaths } from 'next'
import pokeApi from '../../api/pokeApi'
import { PokemonFull } from '../../interfaces/pokemon-full'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { localFavorites } from '@/utils'
import confetti from 'canvas-confetti'
import { getPokemonInfo } from '@/utils/getPokemonInfo'
import { redirect } from 'next/dist/server/api-utils'
interface Props {
  pokemon: PokemonFull
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false)
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id)
    setIsInFavorites(!isInFavorites)
    if (!isInFavorites) {
      confetti({
        zIndex: 100,
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }
  useEffect(() => {
    setIsInFavorites(localFavorites.isFavorite(pokemon.id))
  }, [pokemon.id])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={2}>
          <Card isHoverable>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h3 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button onPress={onToggleFavorite} ghost={!isInFavorites}>
                {!isInFavorites ? ' Guardar fav' : 'Quitar fav'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text h6 size={30}>
                {' '}
                Transformaciones
              </Text>
              <Container direction='row' display='flex'>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                ></Image>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonAv = [...Array(151)].map((value, i) => `${i + 1}`)
  const paths = pokemonAv.map((id) => {
    return {
      params: { id },
    }
  })

  return {
    paths: paths,
    fallback: 'blocking',
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await getPokemonInfo(id)
  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      pokemon,
    },
    revalidate: 86400,
  }
}

export default PokemonPage
