import { pokeApi } from "../api"
import { PokemonDatailResponse } from "../interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<PokemonDatailResponse>(`pokemon/${nameOrId}`)

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null
    }


}