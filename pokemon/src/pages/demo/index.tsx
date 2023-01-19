import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Sprites, PokemonFull } from '../../interfaces/pokemon-full'
import FavoritePokemonCard from '../../components/pokemon/FavoritePokemon'
import {
  getPokemonInfo,
  PokemonShortResponse,
} from '../../utils/getPokemonInfo'
import Counter from '@/components/demo/Counter'
import Usuario from '@/components/demo/Usuario'
import { Spacer, Text } from '@nextui-org/react'
import { TimerPadre } from '@/components/demo/timerPadre'
export default function DemoPage() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)
  const [pokemon, setPokemon] = useState({} as PokemonShortResponse)
  const add = () => {
    setResult(num1 + num2)
  }
  const subtract = () => {
    setResult(num1 - num2)
  }
  const multiply = () => {
    setResult(num1 * num2)
  }
  const divide = () => {
    setResult(num1 / num2)
  }

  const search = async () => {
    if (pokemon.name) {
      setPokemon({} as PokemonShortResponse)
      return
    }
    const newPokemon = await getPokemonInfo('1')
    if (newPokemon) {
      setPokemon(newPokemon)
    }
    console.log('🚀 ~ file: index.tsx:24 ~ search ~ result')
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div data-testid='result'>Resultado {result}</div>
      <input
        placeholder='Enter number 1'
        type='number'
        data-testid='num1'
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value))}
      />
      <input
        placeholder='Enter number 2'
        type='number'
        data-testid='num2'
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value))}
      />
      <button onClick={add} data-testid='add'>
        Add
      </button>
      <button onClick={subtract} data-testid='subtract'>
        Subtract
      </button>
      <button onClick={multiply} data-testid='multiply'>
        Multiply
      </button>
      <button onClick={divide} data-testid='divide'>
        Divide
      </button>
      <button onClick={search} data-testid='search'>
        Search
      </button>
      {pokemon.name ? (
        <div>
          <h1>{pokemon.name}</h1>
          <FavoritePokemonCard id={pokemon.id}></FavoritePokemonCard>
        </div>
      ) : (
        <div>
          <h1>No hay nada</h1>
        </div>
      )}
      <Text h2>useState</Text>
      <Counter></Counter>
      <Spacer></Spacer>
      <Usuario></Usuario>
      <Text h2>useEFfect - useRef</Text>
      <TimerPadre></TimerPadre>
    </div>
  )
}
