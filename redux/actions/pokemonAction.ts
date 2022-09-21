import { AppDispatch } from './../store';
import { PokemonListResponse, SmallPokemon } from './../../interfaces/pokemon-list';
import { pokeApi } from "../../api"
import { set_pokemons } from '../slices/pokemonSlice';


export const fetchPokemons = () => async (dispatch: AppDispatch) => {

    pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')
        .then(response => {

            const pokemons : SmallPokemon[] = response.data.results.map((pokemon, index) => (
                { ...pokemon, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg` }
            ))

            dispatch(set_pokemons(pokemons))
        })
        .catch(error => {
            console.log(error);
        })
}