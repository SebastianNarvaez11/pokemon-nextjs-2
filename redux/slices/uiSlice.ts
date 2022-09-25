import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SmallPokemon } from '../../interfaces';

export interface UIState {
    pokemonSelected: SmallPokemon,
    theme: boolean,
    isDragging: boolean
}

const initialState: UIState = {
    pokemonSelected: {
        id: 0,
        img: '',
        name: '',
        url: ''
    },
    theme: true,
    isDragging: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {

        set_theme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload
        },

        set_pokemon_selected: (state, action: PayloadAction<SmallPokemon>) => {
            state.pokemonSelected = action.payload
        },

        set_is_dragging: (state, action: PayloadAction<boolean>) => {
            state.isDragging = action.payload
        }
    }
})

export const { set_theme, set_pokemon_selected, set_is_dragging } = uiSlice.actions
export default uiSlice.reducer