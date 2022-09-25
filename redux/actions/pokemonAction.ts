import { Dispatch, SetStateAction } from 'react';

import { AppDispatch } from './../store';
import { PokemonListResponse, SmallPokemon } from './../../interfaces/pokemon-list';
import { pokeApi } from "../../api"
import { set_favorites } from '../slices/pokemonSlice';


export const loadFavoritesLocalStorage = () => (dispatch: AppDispatch) => {
    let favorites: SmallPokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    dispatch(set_favorites(favorites))
}


export const addFavoritePokemon = (pokemon: SmallPokemon) => (dispatch: AppDispatch) => {

    let favorites: SmallPokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    const exist_pokemon = favorites.find(poke => poke.id === pokemon.id)

    if (exist_pokemon) {
        return alert('Este Pokemon ya esta en favoritos')
    } else {
        favorites.push(pokemon)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        dispatch(set_favorites(favorites))
    }
}


export const deleteFavoritePokemon = (pokemon: SmallPokemon) => (dispatch: AppDispatch) => {

    let favorites: SmallPokemon[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    const new_favorites: SmallPokemon[] = favorites.filter(poke => poke.id !== pokemon.id)

    localStorage.setItem('favorites', JSON.stringify(new_favorites))

    dispatch(set_favorites(new_favorites))

}



// export const fetchPokemons = (setIsLoading?: Dispatch<SetStateAction<boolean>>) => async (dispatch: AppDispatch) => {

//     pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')
//         .then(response => {

//             const pokemons : SmallPokemon[] = response.data.results.map((pokemon, index) => (
//                 { ...pokemon, id: index + 1, img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg` }
//             ))

//             dispatch(set_pokemons(pokemons))
//             // setIsLoading(false)
//         })
//         .catch(error => {
//             console.log(error);
//             // setIsLoading(false)
//         })
// }