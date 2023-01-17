import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Button } from '@nextui-org/react'
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
      <ul>
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <p>
                {pokemon.id} {pokemon.name}
              </p>
            </li>
          )
        })}
      </ul>
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
