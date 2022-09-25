import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { SmallPokemon } from "../../interfaces";

export interface PokemonState {
    pokemons: SmallPokemon[],
    pokemonFavorites: SmallPokemon[]
}

const initialState: PokemonState = {
    pokemons: [],
    pokemonFavorites: []
}


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

        set_pokemons: (state, action: PayloadAction<SmallPokemon[]>) => {
            state.pokemons = action.payload
        },

        set_favorites: (state, action: PayloadAction<SmallPokemon[]>) => {
            state.pokemonFavorites = action.payload
        }
    }
})

export const { set_pokemons, set_favorites } = pokemonSlice.actions
export default pokemonSlice.reducer