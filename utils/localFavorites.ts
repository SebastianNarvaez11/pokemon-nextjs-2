import { pokeApi } from "../api";
import { FullPokemon } from "../interfaces";

const toggleFavorites = (id: number) => {

    console.log('toggle favorite llamado');

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokemon_id => (pokemon_id !== id))
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}


const existInFavorites = (id: number): boolean => {

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)
}


const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}
 


export default {
    toggleFavorites, existInFavorites, pokemons
}