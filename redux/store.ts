import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./slices/uiSlice";
import pokemonSlice from './slices/pokemonSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice,
        pokemon: pokemonSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch