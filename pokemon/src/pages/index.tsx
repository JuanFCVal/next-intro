import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button, Card, Grid, Row, Text, Col } from '@nextui-org/react'
import Layout from '@/components/Layouts/Layout'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import pokeApi from '../api/pokeApi'
import { PokemonItem, PokemonListResponse } from '../interfaces/pokemon-list'

interface HomeProps {
  pokemons: PokemonItem[]
}
const Home: NextPage<HomeProps> = ({ pokemons }) => {
  console.log(pokemons)
  return (
    <Layout title='Lista de Pokemon'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => {
          return (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
              <Card isHoverable>
                <Card.Body css={{ padding: 1 }}>
                  <Card.Image
                    src={pokemon.img}
                    width='100%'
                    height={150}
                  ></Card.Image>
                </Card.Body>
                <Card.Footer>
                  <Col>
                    <Row justify='space-between'>
                      <Text transform='capitalize'>{pokemon.name}</Text>
                      <Text>#{pokemon.id}</Text>
                    </Row>
                  </Col>
                </Card.Footer>
              </Card>
            </Grid>
          )
        })}
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: PokemonItem[] = data.results.map(
    (pokemon: PokemonItem, index) => {
      const id = index + 1
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      return {
        id,
        img,
        name: pokemon.name,
        url: pokemon.url,
      }
    }
  )
  return {
    props: {
      pokemons,
    },
  }
}
export default Home
