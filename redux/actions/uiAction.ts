import { SmallPokemon } from './../../interfaces/pokemon-list';
import { FullPokemon } from './../../interfaces/pokemon-full';
import { pokeApi } from '../../api';
import { set_pokemon_selected, set_theme } from '../slices/uiSlice';
import { AppDispatch } from './../store';




export const getPokemonSelectedFull = (poke: SmallPokemon) => (dispatch: AppDispatch) => {

    pokeApi.get<FullPokemon>(`pokemon/${poke.id}`)
        .then(response => {
            const pokemon : SmallPokemon = {...poke, full : response.data}
            dispatch(set_pokemon_selected(pokemon))
        })
        .catch(error => {
            console.log(error);
        })
}




export const setThemeSwitch = (checked: boolean) => (dispatch: AppDispatch) => {

    localStorage.setItem('theme', `${checked}`)
    dispatch(set_theme(checked))
}





export const getThemeLocalStorage = () => (dispatch: AppDispatch) => {

    const checked = localStorage.getItem('theme')

    if (checked === null) {
        localStorage.setItem('theme', `true`)
        dispatch(set_theme(true))
    }

    if (checked === 'false') {
        dispatch(set_theme(false))
    }

    if (checked === 'true') {
        dispatch(set_theme(true))
    }
}