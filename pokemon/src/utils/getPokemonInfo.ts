import pokeApi from '../api/pokeApi'
import { PokemonFull, Sprites } from '../interfaces/pokemon-full'
export interface PokemonShortResponse {
  id: number
  name: string
  sprites: Sprites
}
export const getPokemonInfo = async (nameorid: String) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`pokemon/${nameorid}`)
    const pokemon: PokemonShortResponse = {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    }
    return pokemon
  } catch (e) {
    return null
  }
}
