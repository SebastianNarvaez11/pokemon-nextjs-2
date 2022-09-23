import { pokeApi } from "../api"
import { FullPokemon } from "../interfaces"

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<FullPokemon>(`pokemon/${nameOrId}`)

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    } catch (error) {
        return null
    }


}