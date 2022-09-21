import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

import { SmallPokemon } from "../../interfaces";

export interface PokemonState {
    pokemons: SmallPokemon[]
}

const initialState: PokemonState = {
    pokemons: []
}


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

        set_pokemons: (state, action: PayloadAction<SmallPokemon[]>) => {
            state.pokemons = action.payload
        }
    }
})

export const { set_pokemons } = pokemonSlice.actions
export default pokemonSlice.reducer