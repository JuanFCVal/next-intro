import pokeApi from '@/api/pokeApi'
import { PokemonFull } from '@/interfaces/pokemon-full'

export const getPokemonInfo = async (nameorid: String) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`pokemon/${nameorid}`)
    const pokemon = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    }
    return pokemon
  } catch (e) {
    return null
  }
}
