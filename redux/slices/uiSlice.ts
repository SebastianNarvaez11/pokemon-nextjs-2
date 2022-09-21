import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SmallPokemon } from '../../interfaces';

export interface UIState {
    pokemonSelected: SmallPokemon,
    theme: boolean
}

const initialState: UIState = {
    pokemonSelected: {
        id: 0,
        img: '',
        name: '',
        url: ''
    },
    theme: true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

        set_theme: (state, action : PayloadAction<boolean>) => {
            state.theme = action.payload
        },

        set_pokemon_selected: (state, action: PayloadAction<SmallPokemon>) => {
            state.pokemonSelected = action.payload
        }
    }
})

export const { set_theme, set_pokemon_selected } = uiSlice.actions
export default uiSlice.reducer