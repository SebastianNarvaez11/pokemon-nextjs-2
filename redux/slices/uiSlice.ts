import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SmallPokemon } from '../../interfaces';

export interface UIState {
    pokemonSelected: SmallPokemon
}

const initialState: UIState = {
    pokemonSelected: {
        id: 0,
        img: '',
        name: '',
        url: ''
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

        set_pokemon_selected: (state, action: PayloadAction<SmallPokemon>) => {
            state.pokemonSelected = action.payload
        }
    }
})

export const { set_pokemon_selected } = uiSlice.actions
export default uiSlice.reducer